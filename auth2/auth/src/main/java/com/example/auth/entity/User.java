// // // // package com.example.auth.entity;

// // // // import jakarta.persistence.*;

// // // // @Entity
// // // // @Table(name = "users")
// // // // public class User {

// // // //     @Id
// // // //     @GeneratedValue(strategy = GenerationType.IDENTITY)
// // // //     private Long id;

// // // //     private String name;
// // // //     private String email;
// // // //     private String password;

// // // //     private String otp;

// // // //     public User() {
// // // //     }

// // // //     public User(String name, String email, String password) {
// // // //         this.name = name;
// // // //         this.email = email;
// // // //         this.password = password;
// // // //     }

// // // //     // GETTERS AND SETTERS

// // // //     public Long getId() {
// // // //         return id;
// // // //     }

// // // //     public String getName() {
// // // //         return name;
// // // //     }

// // // //     public void setName(String name) {
// // // //         this.name = name;
// // // //     }

// // // //     public String getEmail() {
// // // //         return email;
// // // //     }

// // // //     public void setEmail(String email) {
// // // //         this.email = email;
// // // //     }

// // // //     public String getPassword() {
// // // //         return password;
// // // //     }

// // // //     public void setPassword(String password) {
// // // //         this.password = password;
// // // //     }
// // // // }


// // // package com.example.auth.entity;

// // // import jakarta.persistence.*;

// // // @Entity
// // // @Table(name = "users")
// // // public class User {

// // //     @Id
// // //     @GeneratedValue(strategy = GenerationType.IDENTITY)
// // //     private Long id;

// // //     private String name;
// // //     private String email;
// // //     private String password;

// // //     private String otp;   // ✅ Added OTP field

// // //     // =====================
// // //     // GETTERS AND SETTERS
// // //     // =====================

// // //     public Long getId() {
// // //         return id;
// // //     }

// // //     public void setId(Long id) {
// // //         this.id = id;
// // //     }

// // //     public String getName() {
// // //         return name;
// // //     }

// // //     public void setName(String name) {
// // //         this.name = name;
// // //     }

// // //     public String getEmail() {
// // //         return email;
// // //     }

// // //     public void setEmail(String email) {
// // //         this.email = email;
// // //     }

// // //     public String getPassword() {
// // //         return password;
// // //     }

// // //     public void setPassword(String password) {
// // //         this.password = password;
// // //     }

// // //     public String getOtp() {
// // //         return otp;
// // //     }

// // //     public void setOtp(String otp) {
// // //         this.otp = otp;
// // //     }
// // // }

// // package com.example.auth.entity;

// // import jakarta.persistence.*;

// // @Entity
// // @Table(name = "users")
// // public class User {

// //     @Id
// //     @GeneratedValue(strategy = GenerationType.IDENTITY)
// //     private Long id;

// //     private String name;

// //     @Column(unique = true)   // ✅ prevents duplicate email
// //     private String email;

// //     private String password;

// //     private String otp;

// //     private boolean verified = false;   // ✅ added verification status

// //     // =====================
// //     // GETTERS AND SETTERS
// //     // =====================

// //     public Long getId() {
// //         return id;
// //     }

// //     public void setId(Long id) {
// //         this.id = id;
// //     }

// //     public String getName() {
// //         return name;
// //     }

// //     public void setName(String name) {
// //         this.name = name;
// //     }

// //     public String getEmail() {
// //         return email;
// //     }

// //     public void setEmail(String email) {
// //         this.email = email;
// //     }

// //     public String getPassword() {
// //         return password;
// //     }

// //     public void setPassword(String password) {
// //         this.password = password;
// //     }

// //     public String getOtp() {
// //         return otp;
// //     }

// //     public void setOtp(String otp) {
// //         this.otp = otp;
// //     }

// //     public boolean isVerified() {
// //         return verified;
// //     }

// //     public void setVerified(boolean verified) {
// //         this.verified = verified;
// //     }
// // }


// package com.example.auth.entity;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "users")
// public class User {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String name;

//     @Column(unique = true)
//     private String email;

//     private String password;

//     private String otp;

//     private boolean verified = false;   // IMPORTANT

//     // =====================
//     // GETTERS AND SETTERS
//     // =====================

//     public Long getId() {
//         return id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public boolean isVerified() {
//         return verified;
//     }

//     public void setVerified(boolean verified) {
//         this.verified = verified;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public String getOtp() {
//         return otp;
//     }

//     public void setOtp(String otp) {
//         this.otp = otp;
//     }
// }

package com.example.auth.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String otp;

    private LocalDateTime otpExpiry;

    private boolean verified = false;

    // getters & setters

    public Long getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getOtp() { return otp; }
    public void setOtp(String otp) { this.otp = otp; }

    public LocalDateTime getOtpExpiry() { return otpExpiry; }
    public void setOtpExpiry(LocalDateTime otpExpiry) { this.otpExpiry = otpExpiry; }

    public boolean isVerified() { return verified; }
    public void setVerified(boolean verified) { this.verified = verified; }
}