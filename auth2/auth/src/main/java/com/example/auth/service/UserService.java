// // // // // // package com.example.auth.service;

// // // // // // import org.springframework.mail.SimpleMailMessage;
// // // // // // import org.springframework.mail.javamail.JavaMailSender;
// // // // // // import org.springframework.beans.factory.annotation.Autowired;
// // // // // // import org.springframework.stereotype.Service;
// // // // // // import com.example.auth.entity.User;
// // // // // // import com.example.auth.repository.UserRepository;

// // // // // // @Service
// // // // // // public class UserService {

// // // // // //     private final UserRepository userRepository;

// // // // // //     public UserService(UserRepository userRepository) {
// // // // // //         this.userRepository = userRepository;
// // // // // //     }

// // // // // //     // REGISTER
// // // // // //     public User register(User user) {
// // // // // //         return userRepository.save(user);
// // // // // //     }

// // // // // //     // LOGIN
// // // // // //     public User login(String email, String password) {
// // // // // //         return userRepository.findByEmail(email)
// // // // // //                 .filter(user -> user.getPassword().equals(password))
// // // // // //                 .orElse(null);
// // // // // //     }
// // // // // // }

// // // // // package com.example.auth.service;

// // // // // import org.springframework.mail.SimpleMailMessage;
// // // // // import org.springframework.mail.javamail.JavaMailSender;
// // // // // import org.springframework.beans.factory.annotation.Autowired;
// // // // // import org.springframework.stereotype.Service;

// // // // // import com.example.auth.entity.User;
// // // // // import com.example.auth.repository.UserRepository;

// // // // // import java.util.Optional;
// // // // // import java.util.Random;

// // // // // @Service
// // // // // public class UserService {

// // // // //     private final UserRepository userRepository;

// // // // //     @Autowired
// // // // //     private JavaMailSender mailSender;

// // // // //     public UserService(UserRepository userRepository) {
// // // // //         this.userRepository = userRepository;
// // // // //     }

// // // // //     // =========================
// // // // //     // REGISTER (WITH OTP SEND)
// // // // //     // =========================
// // // // //     public User register(User user) {

// // // // //         String otp = generateOtp();

// // // // //         user.setOtp(otp);

// // // // //         // Save user to database
// // // // //         User savedUser = userRepository.save(user);

// // // // //         // Generate 6-digit OTP
// // // // //         // String otp = generateOtp();

// // // // //         // Send OTP to email
// // // // //         sendOtpEmail(savedUser.getEmail(), otp);

// // // // //         return savedUser;
// // // // //     }

// // // // //     // =========================
// // // // //     // LOGIN
// // // // //     // =========================
// // // // //     public User login(String email, String password) {

// // // // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // // // //         if (userOptional.isPresent() &&
// // // // //                 userOptional.get().getPassword().equals(password)) {
// // // // //             return userOptional.get();
// // // // //         }

// // // // //         return null;
// // // // //     }

// // // // //     // =========================
// // // // //     // GENERATE OTP
// // // // //     // =========================
// // // // //     private String generateOtp() {
// // // // //         Random random = new Random();
// // // // //         int otpNumber = 100000 + random.nextInt(900000);
// // // // //         return String.valueOf(otpNumber);
// // // // //     }

// // // // //     // =========================
// // // // //     // SEND OTP EMAIL
// // // // //     // =========================
// // // // //     public void sendOtpEmail(String toEmail, String otp) {

// // // // //         SimpleMailMessage message = new SimpleMailMessage();
// // // // //         message.setTo(toEmail);
// // // // //         message.setSubject("Your OTP Code");
// // // // //         message.setText("Your OTP is: " + otp);
// // // // //         message.setFrom("hithashreekv09@gmail.com");

// // // // //         mailSender.send(message);
// // // // //     }

// // // // //     //verify otp
// // // // //     public boolean verifyOtp(String email, String enteredOtp) {

// // // // //     Optional<User> userOptional = userRepository.findByEmail(email);

// // // // //     if (userOptional.isPresent()) {

// // // // //         User user = userOptional.get();

// // // // //         if (user.getOtp() != null && user.getOtp().equals(enteredOtp)) {

// // // // //             user.setOtp(null); // clear OTP after success
// // // // //             userRepository.save(user);

// // // // //             return true;
// // // // //         }
// // // // //     }

// // // // //     return false;
// // // // // }
// // // // // }

// // // // package com.example.auth.service;

// // // // import org.springframework.mail.SimpleMailMessage;
// // // // import org.springframework.mail.javamail.JavaMailSender;
// // // // import org.springframework.beans.factory.annotation.Autowired;
// // // // import org.springframework.stereotype.Service;

// // // // import com.example.auth.entity.User;
// // // // import com.example.auth.repository.UserRepository;

// // // // import java.util.Optional;
// // // // import java.util.Random;

// // // // @Service
// // // // public class UserService {

// // // //     private final UserRepository userRepository;

// // // //     @Autowired
// // // //     private JavaMailSender mailSender;

// // // //     public UserService(UserRepository userRepository) {
// // // //         this.userRepository = userRepository;
// // // //     }

// // // //     // =========================
// // // //     // REGISTER (WITH DUPLICATE CHECK)
// // // //     // =========================
// // // //     public String register(User user) {

// // // //         // ✅ Check if email already exists
// // // //         if (userRepository.existsByEmail(user.getEmail())) {
// // // //             return "Email is already registered";
// // // //         }

// // // //         // Generate OTP
// // // //         String otp = generateOtp();

// // // //         user.setOtp(otp);
// // // //         user.setVerified(false);

// // // //         // Save user
// // // //         userRepository.save(user);

// // // //         // Send OTP
// // // //         sendOtpEmail(user.getEmail(), otp);

// // // //         return "OTP sent successfully";
// // // //     }

// // // //     // =========================
// // // //     // LOGIN (ONLY IF VERIFIED)
// // // //     // =========================
// // // //     public User login(String email, String password) {

// // // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // // //         if (userOptional.isPresent()) {

// // // //             User user = userOptional.get();

// // // //             // ❌ If not verified, do not allow login
// // // //             if (!user.isVerified()) {
// // // //                 return null;
// // // //             }

// // // //             if (user.getPassword().equals(password)) {
// // // //                 return user;
// // // //             }
// // // //         }

// // // //         return null;
// // // //     }

// // // //     // =========================
// // // //     // VERIFY OTP
// // // //     // =========================
// // // //     public boolean verifyOtp(String email, String enteredOtp) {

// // // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // // //         if (userOptional.isPresent()) {

// // // //             User user = userOptional.get();

// // // //             // ❌ If OTP does not match
// // // //             if (user.getOtp() == null || !user.getOtp().equals(enteredOtp)) {
// // // //                 return false;
// // // //             }

// // // //             // ✅ Correct OTP
// // // //             user.setVerified(true);
// // // //             user.setOtp(null);
// // // //             userRepository.save(user);

// // // //             return true;
// // // //         }

// // // //         return false;
// // // //     }

// // // //     // =========================
// // // //     // SEND FORGOT PASSWORD OTP
// // // //     // =========================
// // // //     public String sendForgotOtp(String email) {

// // // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // // //         if (userOptional.isEmpty()) {
// // // //             return "Email not registered";
// // // //         }

// // // //         User user = userOptional.get();

// // // //         String otp = generateOtp();
// // // //         user.setOtp(otp);
// // // //         userRepository.save(user);

// // // //         sendOtpEmail(email, otp);

// // // //         return "Reset OTP sent successfully";
// // // //     }

// // // //     // =========================
// // // //     // RESET PASSWORD
// // // //     // =========================
// // // //     public String resetPassword(String email, String otp, String newPassword) {

// // // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // // //         if (userOptional.isEmpty()) {
// // // //             return "User not found";
// // // //         }

// // // //         User user = userOptional.get();

// // // //         if (user.getOtp() == null || !user.getOtp().equals(otp)) {
// // // //             return "Invalid OTP";
// // // //         }

// // // //         user.setPassword(newPassword);
// // // //         user.setOtp(null);
// // // //         userRepository.save(user);

// // // //         return "Password reset successful";
// // // //     }

// // // //     // =========================
// // // //     // GENERATE OTP
// // // //     // =========================
// // // //     private String generateOtp() {
// // // //         Random random = new Random();
// // // //         int otpNumber = 100000 + random.nextInt(900000);
// // // //         return String.valueOf(otpNumber);
// // // //     }

// // // //     // =========================
// // // //     // SEND OTP EMAIL
// // // //     // =========================
// // // //     public void sendOtpEmail(String toEmail, String otp) {

// // // //         SimpleMailMessage message = new SimpleMailMessage();
// // // //         message.setTo(toEmail);
// // // //         message.setSubject("Your OTP Code");
// // // //         message.setText("Your OTP is: " + otp);
// // // //         message.setFrom("hithashreekv09@gmail.com");

// // // //         mailSender.send(message);
// // // //     }
// // // // }


// // // package com.example.auth.service;

// // // import org.springframework.mail.SimpleMailMessage;
// // // import org.springframework.mail.javamail.JavaMailSender;
// // // import org.springframework.beans.factory.annotation.Autowired;
// // // import org.springframework.stereotype.Service;

// // // import com.example.auth.entity.User;
// // // import com.example.auth.repository.UserRepository;

// // // import java.util.Optional;
// // // import java.util.Random;

// // // @Service
// // // public class UserService {

// // //     private final UserRepository userRepository;

// // //     @Autowired
// // //     private JavaMailSender mailSender;

// // //     public UserService(UserRepository userRepository) {
// // //         this.userRepository = userRepository;
// // //     }

// // //     // =========================
// // //     // REGISTER
// // //     // =========================
// // //     public User register(User user) {

// // //         // ❌ If email already exists → return null
// // //         if (userRepository.existsByEmail(user.getEmail())) {
// // //             return null;
// // //         }

// // //         String otp = generateOtp();

// // //         user.setOtp(otp);
// // //         user.setVerified(false);

// // //         User savedUser = userRepository.save(user);

// // //         sendOtpEmail(savedUser.getEmail(), otp);

// // //         return savedUser;
// // //     }

// // //     // =========================
// // //     // LOGIN
// // //     // =========================
// // //     public User login(String email, String password) {

// // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // //         if (userOptional.isPresent()) {

// // //             User user = userOptional.get();

// // //             // ❌ not verified
// // //             if (!user.isVerified()) {
// // //                 return null;
// // //             }

// // //             if (user.getPassword().equals(password)) {
// // //                 return user;
// // //             }
// // //         }

// // //         return null;
// // //     }

// // //     // =========================
// // //     // VERIFY OTP
// // //     // =========================
// // //     public boolean verifyOtp(String email, String enteredOtp) {

// // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // //         if (userOptional.isPresent()) {

// // //             User user = userOptional.get();

// // //             if (user.getOtp() != null && user.getOtp().equals(enteredOtp)) {

// // //                 user.setVerified(true);
// // //                 user.setOtp(null);
// // //                 userRepository.save(user);

// // //                 return true;
// // //             }
// // //         }

// // //         return false;
// // //     }

// // //     // =========================
// // //     // FORGOT PASSWORD
// // //     // =========================
// // //     public boolean sendForgotOtp(String email) {

// // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // //         if (userOptional.isEmpty()) {
// // //             return false;
// // //         }

// // //         User user = userOptional.get();

// // //         String otp = generateOtp();
// // //         user.setOtp(otp);
// // //         userRepository.save(user);

// // //         sendOtpEmail(email, otp);

// // //         return true;
// // //     }

// // //     public boolean resetPassword(String email, String otp, String newPassword) {

// // //         Optional<User> userOptional = userRepository.findByEmail(email);

// // //         if (userOptional.isPresent()) {

// // //             User user = userOptional.get();

// // //             if (user.getOtp() != null && user.getOtp().equals(otp)) {

// // //                 user.setPassword(newPassword);
// // //                 user.setOtp(null);
// // //                 userRepository.save(user);

// // //                 return true;
// // //             }
// // //         }

// // //         return false;
// // //     }

// // //     private String generateOtp() {
// // //         Random random = new Random();
// // //         int otpNumber = 100000 + random.nextInt(900000);
// // //         return String.valueOf(otpNumber);
// // //     }

// // //     public void sendOtpEmail(String toEmail, String otp) {

// // //         SimpleMailMessage message = new SimpleMailMessage();
// // //         message.setTo(toEmail);
// // //         message.setSubject("Your OTP Code");
// // //         message.setText("Your OTP is: " + otp);
// // //         message.setFrom("hithashreekv09@gmail.com");

// // //         mailSender.send(message);
// // //     }
// // // }


// // package com.example.auth.service;

// // import org.springframework.mail.SimpleMailMessage;
// // import org.springframework.mail.javamail.JavaMailSender;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.stereotype.Service;

// // import com.example.auth.entity.User;
// // import com.example.auth.repository.UserRepository;

// // import java.util.Optional;
// // import java.util.Random;

// // @Service
// // public class UserService {

// //     private final UserRepository userRepository;

// //     @Autowired
// //     private JavaMailSender mailSender;

// //     public UserService(UserRepository userRepository) {
// //         this.userRepository = userRepository;
// //     }

// //     // ================= REGISTER =================
// //     public User register(User user) {

// //         if (userRepository.existsByEmail(user.getEmail())) {
// //             return null; // email already exists
// //         }

// //         String otp = generateOtp();

// //         user.setOtp(otp);
// //         user.setVerified(false);

// //         User savedUser = userRepository.save(user);

// //         sendOtpEmail(savedUser.getEmail(), otp);

// //         return savedUser;
// //     }

// //     // ================= LOGIN =================
// //     public User login(String email, String password) {

// //         Optional<User> optionalUser = userRepository.findByEmail(email);

// //         if (optionalUser.isEmpty()) {
// //             return null;
// //         }

// //         User user = optionalUser.get();

// //         // MUST match email AND password AND verified
// //         if (user.getEmail().equals(email)
// //                 && user.getPassword().equals(password)
// //                 && user.isVerified()) {
// //             return user;
// //         }

// //         return null;
// //     }

// //     // ================= VERIFY OTP =================
// //     public boolean verifyOtp(String email, String enteredOtp) {

// //         Optional<User> optionalUser = userRepository.findByEmail(email);

// //         if (optionalUser.isEmpty()) {
// //             return false;
// //         }

// //         User user = optionalUser.get();

// //         if (user.getOtp() != null && user.getOtp().equals(enteredOtp)) {
// //             user.setVerified(true);
// //             user.setOtp(null);
// //             userRepository.save(user);
// //             return true;
// //         }

// //         return false;
// //     }

// //     // ================= FORGOT PASSWORD =================
// //     public boolean sendForgotOtp(String email) {

// //         Optional<User> optionalUser = userRepository.findByEmail(email);

// //         if (optionalUser.isEmpty()) {
// //             return false;
// //         }

// //         User user = optionalUser.get();

// //         String otp = generateOtp();
// //         user.setOtp(otp);
// //         userRepository.save(user);

// //         sendOtpEmail(email, otp);
// //         return true;
// //     }

// //     public boolean resetPassword(String email, String otp, String newPassword) {

// //         Optional<User> optionalUser = userRepository.findByEmail(email);

// //         if (optionalUser.isEmpty()) {
// //             return false;
// //         }

// //         User user = optionalUser.get();

// //         if (user.getOtp() != null && user.getOtp().equals(otp)) {
// //             user.setPassword(newPassword);
// //             user.setOtp(null);
// //             userRepository.save(user);
// //             return true;
// //         }

// //         return false;
// //     }

// //     private String generateOtp() {
// //         Random random = new Random();
// //         return String.valueOf(100000 + random.nextInt(900000));
// //     }

// //     private void sendOtpEmail(String toEmail, String otp) {

// //         SimpleMailMessage message = new SimpleMailMessage();
// //         message.setTo(toEmail);
// //         message.setSubject("Your OTP Code");
// //         message.setText("Your OTP is: " + otp);
// //         message.setFrom("hithashreekv09@gmail.com");

// //         mailSender.send(message);
// //     }
// // }

// package com.example.auth.service;

// import com.example.auth.entity.User;
// import com.example.auth.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;
// import org.springframework.mail.SimpleMailMessage;
// import org.springframework.mail.javamail.JavaMailSender;

// import java.time.LocalDateTime;
// import java.util.Optional;
// import java.util.Random;

// @Service
// public class UserService {

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private JavaMailSender mailSender;

//     private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

//     private String generateOtp() {
//         return String.valueOf(new Random().nextInt(900000) + 100000);
//     }

//     private void sendEmail(String to, String otp) {
//         SimpleMailMessage message = new SimpleMailMessage();
//         message.setTo(to);
//         message.setSubject("Your OTP Code");
//         message.setText("Your OTP is: " + otp + "\nValid for 15 minutes.");
//         mailSender.send(message);
//     }

//     public String register(User user) {

//         if (userRepository.existsByEmail(user.getEmail())) {
//             return "Email already registered. Please login.";
//         }

//         user.setPassword(passwordEncoder.encode(user.getPassword()));
//         user.setVerified(false);

//         String otp = generateOtp();
//         user.setOtp(otp);
//         user.setOtpExpiry(LocalDateTime.now().plusMinutes(15));

//         userRepository.save(user);
//         sendEmail(user.getEmail(), otp);

//         return "OTP sent to email.";
//     }

//     public String verifyOtp(String email, String otp) {

//         Optional<User> optionalUser = userRepository.findByEmail(email);

//         if (optionalUser.isEmpty()) return "User not found.";

//         User user = optionalUser.get();

//         if (!otp.equals(user.getOtp())) return "Invalid OTP.";

//         if (user.getOtpExpiry().isBefore(LocalDateTime.now()))
//             return "OTP expired.";

//         user.setVerified(true);
//         user.setOtp(null);
//         user.setOtpExpiry(null);

//         userRepository.save(user);

//         return "Account verified successfully.";
//     }

//     public String login(String email, String password) {

//         Optional<User> optionalUser = userRepository.findByEmail(email);

//         if (optionalUser.isEmpty()) return "User not found.";

//         User user = optionalUser.get();

//         if (!user.isVerified())
//             return "Please verify your email first.";

//         if (!passwordEncoder.matches(password, user.getPassword()))
//             return "Invalid credentials.";

//         return "Login successful.";
//     }

//     public String sendForgotOtp(String email) {

//         Optional<User> optionalUser = userRepository.findByEmail(email);

//         if (optionalUser.isEmpty())
//             return "Email not registered.";

//         User user = optionalUser.get();

//         String otp = generateOtp();
//         user.setOtp(otp);
//         user.setOtpExpiry(LocalDateTime.now().plusMinutes(15));

//         userRepository.save(user);
//         sendEmail(email, otp);

//         return "OTP sent for password reset.";
//     }

//     public String resetPassword(String email, String otp, String newPassword) {

//         Optional<User> optionalUser = userRepository.findByEmail(email);

//         if (optionalUser.isEmpty())
//             return "User not found.";

//         User user = optionalUser.get();

//         if (!otp.equals(user.getOtp()))
//             return "Invalid OTP.";

//         if (user.getOtpExpiry().isBefore(LocalDateTime.now()))
//             return "OTP expired.";

//         user.setPassword(passwordEncoder.encode(newPassword));
//         user.setOtp(null);
//         user.setOtpExpiry(null);

//         userRepository.save(user);

//         return "Password reset successful.";
//     }
// }

// //the above code is working fine with the issues in resetting password

package com.example.auth.service;

import com.example.auth.entity.User;
import com.example.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    private String generateOtp() {
        return String.valueOf(new Random().nextInt(900000) + 100000);
    }

    private void sendEmail(String to, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Your OTP Code");
        message.setText("Your OTP is: " + otp + "\nValid for 15 minutes.");
        mailSender.send(message);
    }

    public String register(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            return "Email already registered. Please login.";
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setVerified(false);

        String otp = generateOtp();
        user.setOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(15));

        userRepository.save(user);
        sendEmail(user.getEmail(), otp);

        return "OTP sent to email.";
    }

    public String verifyOtp(String email, String otp) {

        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) return "User not found.";

        User user = optionalUser.get();

        if (!otp.equals(user.getOtp())) return "Invalid OTP.";

        if (user.getOtpExpiry().isBefore(LocalDateTime.now()))
            return "OTP expired.";

        // user.setVerified(true);
        // user.setOtp(null);
        // user.setOtpExpiry(null);

        // userRepository.save(user);

        // return "Account verified successfully.";
        // If user is not verified → this is registration OTP
    if (!user.isVerified()) {
        user.setVerified(true);
        user.setOtp(null);
        user.setOtpExpiry(null);
        userRepository.save(user);
        return "Account verified successfully.";
    }

    // If already verified → this is forgot password OTP
    return "OTP verified successfully.";
    }

    /**
     * Authenticate user and return full user object (password cleared) or null on failure.
     */
    public User loginUser(String email, String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isEmpty()) return null;
        User user = optionalUser.get();
        if (!user.isVerified()) return null;
        if (!passwordEncoder.matches(password, user.getPassword())) return null;
        // remove password before returning
        user.setPassword(null);
        return user;
    }

    /**
     * Update profile fields (name, etc) excluding email/password.
     */
    public User updateProfile(User profile) {
        Optional<User> optionalUser = userRepository.findByEmail(profile.getEmail());
        if (optionalUser.isEmpty()) return null;
        User user = optionalUser.get();
        if (profile.getName() != null) user.setName(profile.getName());
        // other fields like gender/interest would also be updated if added
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public String sendForgotOtp(String email) {

        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty())
            return "Email not registered.";

        User user = optionalUser.get();

        String otp = generateOtp();
        user.setOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(15));

        userRepository.save(user);
        sendEmail(email, otp);

        return "OTP sent for password reset.";
    }

    public String resetPassword(String email, String otp, String newPassword) {

        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty())
            return "User not found.";

        User user = optionalUser.get();

        if (!otp.equals(user.getOtp()))
            return "Invalid OTP.";

        if (user.getOtpExpiry().isBefore(LocalDateTime.now()))
            return "OTP expired.";

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setOtp(null);
        user.setOtpExpiry(null);

        userRepository.save(user);

        return "Password reset successful.";
    }
}