import UserModel from '../models/User.js';
import { calculateCalories, getRestrictedFoods } from '../utils/healthUtils.js';

export const saveHealthData = async (req, res, next) => {
  const { height, age, currentWeight, desiredWeight, bloodType } = req.body;
  const { userId } = req.user;

  const recommendedCalories = calculateCalories(
    height,
    age,
    currentWeight,
    desiredWeight
  );

  try {
    const restrictedFoods = await getRestrictedFoods(bloodType);
    const User = await UserModel();
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        healthData: {
          height,
          age,
          currentWeight,
          desiredWeight,
          bloodType,
          recommendedCalories,
          restrictedFoods,
        },
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: 'Health data saved successfully',
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const calculateHealthData = async (req, res, next) => {
  const { height, age, currentWeight, desiredWeight, bloodType } = req.body;

  const recommendedCalories = calculateCalories(
    height,
    age,
    currentWeight,
    desiredWeight
  );

  try {
    const restrictedFoods = await getRestrictedFoods(bloodType);

    res.status(200).json({
      message: 'Health data calculated successfully',
      healthData: {
        recommendedCalories,
        restrictedFoods,
      },
    });
  } catch (error) {
    next(error);
  }
};
