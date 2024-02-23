package com.sistema.ollacomun.application.port.output;

import com.sistema.ollacomun.domain.dto.MamitaDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface MamitaService {

    MamitaDto findMamitaById(Long mamitaId);
    Page<MamitaDto> listMamitaPaginada(Pageable pageable);
    MamitaDto createMamita(MamitaDto mamitaDto);
    MamitaDto updateMamita(MamitaDto mamitaDto,Long mamitaId);
    void deleteMamita(Long mamitaId);
}
