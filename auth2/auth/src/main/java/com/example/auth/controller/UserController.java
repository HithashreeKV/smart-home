// // // // package com.example.auth.controller;

// // // // import org.springframework.web.bind.annotation.*;
// // // // import com.example.auth.entity.User;
// // // // import com.example.auth.service.UserService;

// // // // @RestController
// // // // @RequestMapping("/api/users")
// // // // @CrossOrigin(origins = "*")
// // // // public class UserController {

// // // //     private final UserService userService;

// // // //     public UserController(UserService userService) {
// // // //         this.userService = userService;
// // // //     }

// // // //     @PostMapping("/test-mail")
// // // // public String testMail() {
// // // //     userService.sendOtpEmail("hithashreekv2004@gmail.com", "123456");
// // // //     return "Mail sent";
// // // // }

// // // //     // REGISTER API
// // // //     @PostMapping("/register")
// // // //     public User register(@RequestBody User user) {
// // // //         return userService.register(user);
// // // //     }

// // // //     // LOGIN API
// // // //     @PostMapping("/login")
// // // //     public String login(@RequestBody User user) {

// // // //         User loggedInUser = userService.login(
// // // //                 user.getEmail(),
// // // //                 user.getPassword()
// // // //         );

// // // //         if (loggedInUser != null) {
// // // //             return "Login Successful";
// // // //         } else {
// // // //             return "Invalid Credentials";
// // // //         }
// // // //     }

// // // //     @PostMapping("/verify-otp")
// // // // public String verifyOtp(@RequestBody User user) {

// // // //     boolean isValid = userService.verifyOtp(
// // // //             user.getEmail(),
// // // //             user.getOtp()
// // // //     );

// // // //     if (isValid) {
// // // //         return "OTP Verified Successfully";
// // // //     } else {
// // // //         return "Invalid OTP";
// // // //     }
// // // // }
// // // // }




// // // package com.example.auth.controller;

// // // import org.springframework.beans.factory.annotation.Autowired;
// // // import org.springframework.web.bind.annotation.*;

// // // import com.example.auth.entity.User;
// // // import com.example.auth.service.UserService;

// // // @RestController
// // // @RequestMapping("/api")
// // // @CrossOrigin
// // // public class UserController {

// // //     @Autowired
// // //     private UserService userService;

// // //     // =====================
// // //     // REGISTER
// // //     // =====================
// // //     @PostMapping("/register")
// // //     public String register(@RequestBody User user) {
// // //         return userService.register(user);
// // //     }

// // //     // =====================
// // //     // LOGIN
// // //     // =====================
// // //     @PostMapping("/login")
// // //     public String login(@RequestParam String email,
// // //                         @RequestParam String password) {

// // //         User user = userService.login(email, password);

// // //         if (user == null) {
// // //             return "Invalid credentials or account not verified";
// // //         }

// // //         return "Login successful";
// // //     }

// // //     // =====================
// // //     // VERIFY OTP
// // //     // =====================
// // //     @PostMapping("/verify")
// // //     public String verifyOtp(@RequestParam String email,
// // //                             @RequestParam String otp) {

// // //         boolean result = userService.verifyOtp(email, otp);

// // //         if (result) {
// // //             return "Account verified successfully";
// // //         }

// // //         return "Invalid OTP";
// // //     }

// // //     // =====================
// // //     // FORGOT PASSWORD
// // //     // =====================
// // //     @PostMapping("/forgot-password")
// // //     public String forgotPassword(@RequestParam String email) {
// // //         return userService.sendForgotOtp(email);
// // //     }

// // //     // =====================
// // //     // RESET PASSWORD
// // //     // =====================
// // //     @PostMapping("/reset-password")
// // //     public String resetPassword(@RequestParam String email,
// // //                                 @RequestParam String otp,
// // //                                 @RequestParam String newPassword) {

// // //         return userService.resetPassword(email, otp, newPassword);
// // //     }
// // // }

// // package com.example.auth.controller;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.web.bind.annotation.*;

// // import com.example.auth.entity.User;
// // import com.example.auth.service.UserService;

// // @RestController
// // @RequestMapping("/api/users")
// // @CrossOrigin(origins = "*")
// // public class UserController {

// //     @Autowired
// //     private UserService userService;

// //     @PostMapping("/register")
// //     public User register(@RequestBody User user) {
// //         return userService.register(user);
// //     }

// //     @PostMapping("/login")
// //     public User login(@RequestParam String email,
// //                       @RequestParam String password) {
// //         return userService.login(email, password);
// //     }

// //     @PostMapping("/verify")
// //     public boolean verifyOtp(@RequestParam String email,
// //                              @RequestParam String otp) {
// //         return userService.verifyOtp(email, otp);
// //     }

// //     @PostMapping("/forgot-password")
// //     public boolean forgotPassword(@RequestParam String email) {
// //         return userService.sendForgotOtp(email);
// //     }

// //     @PostMapping("/reset-password")
// //     public boolean resetPassword(@RequestParam String email,
// //                                  @RequestParam String otp,
// //                                  @RequestParam String newPassword) {
// //         return userService.resetPassword(email, otp, newPassword);
// //     }
// // }



// package com.example.auth.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.example.auth.entity.User;
// import com.example.auth.service.UserService;

// @RestController
// @RequestMapping("/api/users")
// @CrossOrigin(origins = "*")
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @PostMapping("/register")
//     public User register(@RequestBody User user) {
//         return userService.register(user);
//     }

//     @PostMapping("/login")
//     public User login(@RequestParam String email,
//                       @RequestParam String password) {
//         return userService.login(email, password);
//     }

//     @PostMapping("/verify")
//     public boolean verifyOtp(@RequestParam String email,
//                              @RequestParam String otp) {
//         return userService.verifyOtp(email, otp);
//     }

//     @PostMapping("/forgot-password")
//     public boolean forgotPassword(@RequestParam String email) {
//         return userService.sendForgotOtp(email);
//     }

//     @PostMapping("/reset-password")
//     public boolean resetPassword(@RequestParam String email,
//                                  @RequestParam String otp,
//                                  @RequestParam String newPassword) {
//         return userService.resetPassword(email, otp, newPassword);
//     }
// }


package com.example.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.auth.entity.User;
import com.example.auth.service.UserService;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public Object login(@RequestBody Map<String, String> data) {
        User user = userService.loginUser(data.get("email"), data.get("password"));
        if (user == null) {
            return "Invalid credentials or not verified";
        }
        return user;
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody Map<String, String> data) {
        return userService.verifyOtp(data.get("email"), data.get("otp"));
    }

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody Map<String, String> data) {
        return userService.sendForgotOtp(data.get("email"));
    }

    @PostMapping("/reset-password")
    public String resetPassword(@RequestBody Map<String, String> data) {
        return userService.resetPassword(
                data.get("email"),
                data.get("otp"),
                data.get("newPassword")
        );
    }

    // =========================
    // PROFILE
    // =========================
    @GetMapping("/profile")
    public User getProfile(@RequestParam String email) {
        // simply return profile by email (password cleared)
        User user = userService.findByEmail(email);
        if (user != null) user.setPassword(null);
        return user;
    }

    @PutMapping("/profile")
    public User updateProfile(@RequestBody User profile) {
        User updated = userService.updateProfile(profile);
        if (updated != null) {
            updated.setPassword(null);
        }
        return updated;
    }
}

//the above code is working fine with the issues in resetting password