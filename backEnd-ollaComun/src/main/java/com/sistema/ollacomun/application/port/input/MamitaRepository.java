package com.sistema.ollacomun.application.port.input;

import com.sistema.ollacomun.domain.dto.MamitaDto;
import com.sistema.ollacomun.domain.entity.Mamita;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MamitaRepository extends JpaRepository<Mamita,Long> {
}
