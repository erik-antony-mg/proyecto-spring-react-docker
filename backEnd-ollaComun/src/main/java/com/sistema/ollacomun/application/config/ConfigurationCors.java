package com.sistema.ollacomun.application.config;

import lombok.NonNull;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ConfigurationCors {
    @Bean
    public WebMvcConfigurer corsConfigure(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(@NonNull CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4300")
                        //esto reemplaza al de arriba para que cualquera use
//                        .allowedOriginPatterns("*")
                        .allowedMethods("*")
                        .exposedHeaders("*") // Exponer el encabezado Authorization
                        .allowCredentials(true);
            }
        };
    }

}
