import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import User from "./user.model.js";

const MedicalReport = sequelize.define("MedicalReport", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  file_url: DataTypes.STRING,
  report_type: DataTypes.STRING,
}, {
  timestamps: true,
});

User.hasMany(MedicalReport, { foreignKey: "user_id" });
MedicalReport.belongsTo(User, { foreignKey: "user_id" });

export default MedicalReport;