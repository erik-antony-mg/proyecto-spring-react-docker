package com.sistema.ollacomun.application.config.beans;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigurationBeans {

    @Bean
    ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
