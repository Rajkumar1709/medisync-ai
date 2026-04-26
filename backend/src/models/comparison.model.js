import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import User from "./user.model.js";
import MedicalReport from "./medicalReport.model.js";

const Comparison = sequelize.define("Comparison", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  result_summary: DataTypes.TEXT,
}, {
  timestamps: true,
});

// Relationships
User.hasMany(Comparison, { foreignKey: "user_id" });
Comparison.belongsTo(User, { foreignKey: "user_id" });

Comparison.belongsTo(MedicalReport, { as: "report1", foreignKey: "report1_id" });
Comparison.belongsTo(MedicalReport, { as: "report2", foreignKey: "report2_id" });

export default Comparison;