import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't register same company.",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(200).json({
      message: "Company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged in user id
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "companies not found",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// company ki id se / user ki id se nahi

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "Company not exit",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const updateCompany = async (req, res) =>{
//     try {
//         const {name, description, website, location} = req.body;
//         const file = req.file

//         // idhar cloudinary ayega

//         const userId = req.id;
//         let company = await Company.findById(userId)

//         if(!company){
//             return res.status(400).json({
//                 message:"Company not found",
//                 success:false
//             })
//         }

//         // updating data
//         if(name) company?.name = name
//         if(description) company?.description = description
//         if(website) company?.website = website
//         if(location) company?.location = location

//         await company.save()

//         company = {
//             name: company.name,
//             location:company.location
//         }

//         return res.status(200).json({
//             message:'Updated successfully',
//             company,
//             success:true
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

export const updateCompany = async (req, res) => {
  // but iss code me req.params.id hoga n ki userId kyuki hame kisi ek specific company ko update karna hai userId ko use karne se sari company aa jayegi

  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    // idhar cloudinary ayega
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;

    const updateData = { name, description, website, location, logo };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server error",
      success: false,
    });
  }
};
