package com.example.demo.Entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

    @Column(name = "institute_mobile")
    private String instituteMobile;

    @Column(name = "institute_email")
    private String instituteEmail;

    @Column(name = "image")
    private String image;

    public InstituteEntity() {
    }

    public InstituteEntity(String instituteName, String instituteDescription, String instituteAddress, String instituteMobile, String instituteEmail,String image) {
        this.instituteName = instituteName;
        this.instituteDescription = instituteDescription;
        this.instituteAddress = instituteAddress;
        this.instituteMobile = instituteMobile;
        this.instituteEmail = instituteEmail;
        this.image = image;
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

    public String getInstituteMobile() {
        return instituteMobile;
    }

    public void setInstituteMobile(String instituteMobile) {
        this.instituteMobile = instituteMobile;
    }

    public String getInstituteEmail() {
        return instituteEmail;
    }

    public void setInstituteEmail(String instituteEmail) {
        this.instituteEmail = instituteEmail;
    }

    public String getImage(){
        return image;
    }

    public void setImage(String image){
        this.image=image;
    }
}
