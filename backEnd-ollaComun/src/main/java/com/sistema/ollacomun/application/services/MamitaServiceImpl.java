package com.sistema.ollacomun.application.services;

import com.sistema.ollacomun.application.port.input.MamitaRepository;
import com.sistema.ollacomun.application.port.output.MamitaService;
import com.sistema.ollacomun.domain.dto.MamitaDto;
import com.sistema.ollacomun.domain.entity.Mamita;
import com.sistema.ollacomun.domain.exception.MamitaNotFount;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MamitaServiceImpl implements MamitaService {

    private final MamitaRepository mamitaRepository;
    private final ModelMapper modelMapper;
    @Override
    public MamitaDto findMamitaById(Long mamitaId) {
        Mamita mamita= mamitaRepository.findById(mamitaId)
                .orElseThrow(()-> new MamitaNotFount("mamita con el ID:"+mamitaId+" no encontrada"));

        return modelMapper.map(mamita,MamitaDto.class);
    }

    @Override
    public Page<MamitaDto> listMamitaPaginada(Pageable pageable) {
        Page<Mamita> mamitas = mamitaRepository.findAll(pageable);
        return mamitas.map(mamita -> modelMapper.map(mamita, MamitaDto.class));
    }

    @Override
    public MamitaDto createMamita(MamitaDto mamitaDto) {
        Mamita mamita= mamitaRepository.save(modelMapper.map(mamitaDto,Mamita.class));
        return modelMapper.map(mamita,MamitaDto.class);
    }

    @Override
    public MamitaDto updateMamita(MamitaDto mamitaDto, Long mamitaId) {
        Mamita mamita= mamitaRepository.findById(mamitaId)
                .orElseThrow(()-> new MamitaNotFount("mamita con el ID:"+mamitaId+" no encontrada"));

        if (mamitaDto.getFechaIngreso()==null){mamitaDto.setFechaIngreso(mamita.getFechaIngreso());}
        modelMapper.map(mamitaDto,mamita);
        mamita.setMamitaId(mamitaId);
        mamitaRepository.save(mamita);
        return modelMapper.map(mamita,MamitaDto.class);
    }

    @Override
    public void deleteMamita(Long mamitaId) {
        Mamita mamita= mamitaRepository.findById(mamitaId)
                .orElseThrow(()-> new MamitaNotFount("mamita con el ID:"+mamitaId+" no encontrada"));
        mamitaRepository.delete(mamita);
    }
}
