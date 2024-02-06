package com.example.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "institutes")
public class InstituteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "institute_id")
    private int instituteId;

    @Column(name = "institute_name")
    private String instituteName;

    @Column(name = "institute_description")
    private String instituteDescription;

    @Column(name = "institute_address")
    private String instituteAddress;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "email")
    private String email;

    @Lob
    @Column(name = "image_data", columnDefinition = "BYTEA")
    private byte[] imageData;

    // Constructors, getters, and setters...
    
    public InstituteEntity() {
    }

    public InstituteEntity(String instituteName, String instituteDescription, String instituteAddress, String mobile, String email, byte[] imageData) {
        this.instituteName = instituteName;
        this.instituteDescription = instituteDescription;
        this.instituteAddress = instituteAddress;
        this.mobile = mobile;
        this.email = email;
        this.imageData = imageData;
    }

    public int getInstituteId() {
        return instituteId;
    }

    public void setInstituteId(int instituteId) {
        this.instituteId = instituteId;
    }

    public String getInstituteName() {
        return instituteName;
    }

    public void setInstituteName(String instituteName) {
        this.instituteName = instituteName;
    }

    public String getInstituteDescription() {
        return instituteDescription;
    }

    public void setInstituteDescription(String instituteDescription) {
        this.instituteDescription = instituteDescription;
    }

    public String getInstituteAddress() {
        return instituteAddress;
    }

    public void setInstituteAddress(String instituteAddress) {
        this.instituteAddress = instituteAddress;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
}
