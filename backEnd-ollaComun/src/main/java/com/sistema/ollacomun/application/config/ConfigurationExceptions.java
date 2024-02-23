package com.sistema.ollacomun.application.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
@RestControllerAdvice
public class ConfigurationExceptions {

    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<?> sqlException(SQLIntegrityConstraintViolationException ex){
        String customErrorMessage="Valor duplicado revise";

        Map<String,Object> error=new HashMap<>();
        error.put("Codigo", HttpStatus.BAD_REQUEST);
        error.put("Error",customErrorMessage);
        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> method(MethodArgumentNotValidException ex){

        List<FieldError> fieldErrors=ex.getBindingResult().getFieldErrors();
        Map<String,Object> errores=new HashMap<>();
        errores.put("status",HttpStatus.BAD_REQUEST);
        for (FieldError error : fieldErrors) {
            errores.put(error.getField(), error.getDefaultMessage());
        }
        return new ResponseEntity<>(errores,HttpStatus.BAD_REQUEST);
    }
}
