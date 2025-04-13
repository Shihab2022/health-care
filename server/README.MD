this is backend

[demo font end 1](https://kamleshyadav.com/html/healthcare/bootstrap5/healthcare/index.html)
[demo font end 2](https://preview.themeforest.net/item/medicate-health-medical-html-template/full_screen_preview/39968143?_ga=2.9930483.77269262.1710597092-1333288503.1642045414)
[demo font end 3 for dental](https://dtdental.wpengine.com/home-page-1/)
[demo font end 4](https://preview.themeforest.net/item/oldkare-senior-elderly-care-wordpress-theme/full_screen_preview/51122184?_ga=2.9930483.77269262.1710597092-1333288503.1642045414)

[email sender template](https://github.com/topics/html-email-templates)

_For image upload on the cloud_
[cloudinary](https://cloudinary.com/)
[multer](https://www.npmjs.com/package/multer)

## command for format schema

```
npx prisma format ./schema.prisma
```

## [SSLCommerz github](https://github.com/sslcommerz/SSLCommerz-NodeJS)

_For call a function automatically after few moment_

## [node-cron](https://www.npmjs.com/package/node-cron)

## [P-hero](https://github.com/Apollo-Level2-Web-Dev/PH-HealthCare-Server)

# Api end point for all the api

## For Auth

- **For Login** `/auth/login`
- **For Refresh Token** `/auth/refresh-token`
- **For Forgot Password** `/auth/forgot-password`
- **For Change Password** `/auth/change-password`
- **For Reset Password** `/auth/reset-password`

## For User Route

- **For Login** `/user/me` **Get Route for get user information**
- **Create Admin** `/user/create-admin` **Post Route . Admin and Super admin can access this api.**
- **Create Doctor** `/user/create-doctor` **Post Route . Admin and Super admin can access this api.**
- **For update Profile** `/user/update-my-profile` **Patch Route . For update profile**
- **For Create New User** `/user/create-patient` **Post Route**

## For Admin Route

- **For Get All Admin Information ** `/admin` **Get Route . Admin and Super admin can access this api.**
- **For Get Single Admin Information ** `/admin/:id` **Get Route . Admin and Super admin can access this api.**
- **For Update Admin Information ** `/admin/:id` **Patch Route . Admin and Super admin can access this api.**
- **For Hard Delete Admin Information ** `/admin/:id` **Delete Route . Admin and Super admin can access this api.**
- **For Soft Delete Admin Information ** `/admin/soft/:id` **Delete Route . Admin and Super admin can access this api.**

## For Doctor Route

- **For Get All Doctor Information ** `/doctor` **Get Route . Admin and Super admin can access this api.**
- **For Get Single Doctor Information ** `/doctor/:id` **Get Route . Admin , Doctor and Super admin can access this api.**
- **Update Doctor Information ** `/doctor/:id` **Patch Route . Admin and Super admin can access this api.**
- **Delete Doctor Information ** `/doctor/:id` **Delete Route . Admin and Super admin can access this api.**
- **Soft Delete Doctor Information ** `/doctor/soft/:id` **Delete Route . Admin and Super admin can access this api.**

## For Specialties Route

- **For Get All Specialties Doctor Information ** `/specialties` **Get Route . Admin and Super admin can access this api.**
- **For Create Specialties Doctor ** `/specialties` **Post Route . Admin and Super admin can access this api.**
- **For Delete Specialties Doctor ** `/specialties/:id` **Delete Route . Admin and Super admin can access this api.**

## Patient Route

- **For Get All Patient Information** `/patient`
- **For Get Single Patient Information** `/patient/:id`
- **For Update Single Patient Information** `/patient/:id` **Patch route for update user information**
- **For Delete Single Patient Information** `/patient/:id` **Delete route for delete user information**
- **For Delete Single Patient Information** `/patient/soft/:id` **Delete route for delete user information**

## Schedule Route

- **For Get All Schedule Information ** `/schedule` **Get Route . Admin Doctor and Super admin can access this api.**
- **For Get Single Schedule Information ** `/schedule/:id` **Get Route . Admin Doctor and Super admin can access this api.**
- **For Create Schedule** `/schedule` **Post Route . Admin and Super admin can access this api.**
- **For Delete Schedule** `/schedule` **Delete Route . Admin and Super admin can access this api.**

## Doctor Schedule Route

- **For Get All Doctor Schedule Information ** `/doctor-schedule` **Get Route .**
- **For Get Single Schedule Information ** `/doctor-schedule/my-schedule` **Get Route . Doctor can access this api.**
- **For Create Schedule** `/doctor-schedule` **Post Route . Doctor can access this api.**
- **For Delete Schedule** `/doctor-schedule/:id` **Delete Route . Admin Doctor and Super admin can access this api.**

## Appointment Route

- **For Get All Appointment Information ** `/appointment` **Get Route . Admin Doctor and Super admin can access this api .**
- **For Get Single Appointment Information ** `/appointment/my-appointment` **Get Route . Doctor and Patient can access this api.**
- **For Create Appointment** `/appointment` **Post Route . Patient can access this api.**
- **Change Appointment Status** `/appointment/status/:id` **Patch Route . Admin Doctor and Super admin can access this api.**

## Payment Route

- **For Get payment Information** `/payment/ipn`
- **Create payment** `/payment/init-payment/:appointmentId` **Post Route**

## Prescription Route

- **For Get payment Information** `/prescription` **Get Route . Admin and Super admin can access this api .**
- **Create Prescription** `/prescription/` **Post Route .Doctor Can access this api .**
- **Get Prescription** `/prescription/my-prescription` **Get Route .Patient Can access this api .**

## Review Route

- **For Get all review Information** `/review`
- **Create Review** `/review/` **Post Route .Patient Can access this api .**

## Meta Route

- **For Get dashboard meta data** `/meta`
