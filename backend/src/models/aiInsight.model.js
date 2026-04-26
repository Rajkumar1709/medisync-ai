import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import MedicalReport from "./medicalReport.model.js";

const AIInsight = sequelize.define("AIInsight", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  insight_text: DataTypes.TEXT,
  severity_level: DataTypes.STRING,
}, {
  timestamps: true,
});

MedicalReport.hasMany(AIInsight, { foreignKey: "report_id" });
AIInsight.belongsTo(MedicalReport, { foreignKey: "report_id" });

export default AIInsight;