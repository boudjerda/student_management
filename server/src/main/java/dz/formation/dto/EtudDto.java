package dz.formation.dto;

public class EtudDto {

    private long key;
    private String nom;
    private String prenom;
    private long matricule;

    public long getKey() {
        return key;
    }

    public void setKey(long key) {
        this.key = key;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public long getMatricule() {
        return matricule;
    }

    public void setMatricule(long matricule) {
        this.matricule = matricule;
    }

    public EtudDto(long key, long matricule, String nom, String prenom) {
        this.key=key;
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;

    }
}
