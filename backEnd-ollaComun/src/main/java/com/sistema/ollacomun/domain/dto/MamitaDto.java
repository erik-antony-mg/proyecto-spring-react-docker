package com.sistema.ollacomun.domain.dto;

import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDate;

@Data
public class MamitaDto {
        Long mamitaId ;
        @NotEmpty
        @NotBlank
        String nombre;
        @NotEmpty
        @NotBlank
        String apellido;
        @NotNull
        @Pattern(regexp ="^\\d{8}$",message = "Escriba bien el numero de DNI")
        String dni;
        @Positive
        @Pattern(regexp ="^\\d{9}$",message = "Escriba bien el numero de celular")
        String celular;
        String domicilio;
        @PositiveOrZero
        Integer numHijos;
        LocalDate fechaIngreso;
}
