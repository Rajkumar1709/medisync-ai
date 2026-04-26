import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import MedicalReport from "./medicalReport.model.js";

const ReportData = sequelize.define("ReportData", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  parameter_name: DataTypes.STRING,
  value: DataTypes.FLOAT,
  unit: DataTypes.STRING,
  normal_range: DataTypes.STRING,
}, {
  timestamps: true,
});

MedicalReport.hasMany(ReportData, { foreignKey: "report_id" });
ReportData.belongsTo(MedicalReport, { foreignKey: "report_id" });

export default ReportData;