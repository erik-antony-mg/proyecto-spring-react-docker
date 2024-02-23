package com.sistema.ollacomun.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "mamitas")
public class Mamita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long mamitaId ;
    private String nombre;
    private String apellido;
    @Column(length = 8,unique = true)
    private String dni;
    @Column(length = 9,unique = true)
    private String celular;
    private String domicilio;
    @Column(name = "numero_hijos")
    private Integer numHijos;
    @Column(name = "fecha_ingreso")
    private LocalDate fechaIngreso;

    @PrePersist
    void agregarDatos(){
        fechaIngreso=LocalDate.now();
        if (numHijos==null){
            setNumHijos(0);
        }
        if (domicilio==null){
            setDomicilio("");
        }
    }
}
