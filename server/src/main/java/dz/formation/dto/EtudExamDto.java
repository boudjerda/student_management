package dz.formation.dto;

public class EtudExamDto {

    private String nom;
    private String module;
    private long note;


    public EtudExamDto(String nom, String module, long note) {
        this.nom = nom;
        this.module = module;
        this.note = note;
    }


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public long getNote() {
        return note;
    }

    public void setNote(long note) {
        this.note = note;
    }

}
