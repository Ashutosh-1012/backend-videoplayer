import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"

const registerUser = asyncHandler(async (req, res) => {
     if ([fullName, email, User, password].some((field) => field?.trim() === ""))
          throw new ApiError(404, "All field are required")
}
);

export { registerUser }