package com.sistema.ollacomun.infrastructure.controllers;

import com.sistema.ollacomun.application.port.output.MamitaService;
import com.sistema.ollacomun.domain.dto.MamitaDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/mamitas")
public class MamitaController {

    private final MamitaService mamitaService;

    @GetMapping("/list")
    ResponseEntity<?> listPageMamitas(@PageableDefault Pageable pageable){
        return ResponseEntity.ok(mamitaService.listMamitaPaginada(pageable));
    }

    @GetMapping("/{mamitaId}")
    ResponseEntity<?> getMamitaById(@PathVariable Long mamitaId){
        return ResponseEntity.ok(mamitaService.findMamitaById(mamitaId));
    }

    @PostMapping("/create")
    ResponseEntity<?> createMamita(@RequestBody @Validated MamitaDto mamitaDto){
        return new ResponseEntity<>(mamitaService.createMamita(mamitaDto), HttpStatus.CREATED);
    }

    @PutMapping("/update/{mamitaId}")
    ResponseEntity<?> updateMamita(@RequestBody @Validated MamitaDto mamitaDto,@PathVariable Long mamitaId){
        return ResponseEntity.ok(mamitaService.updateMamita(mamitaDto,mamitaId));
    }

    @DeleteMapping("/delete/{mamitaId}")
    ResponseEntity<?> deleteMamita(@PathVariable Long mamitaId){
        Map<String, Object>resp=new HashMap<>();
        mamitaService.deleteMamita(mamitaId);
        resp.put("mensaje","Mamita con el ID:"+mamitaId+" fue eliminada");
        return ResponseEntity.ok(resp);
    }

}
