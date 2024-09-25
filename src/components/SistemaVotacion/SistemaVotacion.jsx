import Candidato from '../Candidato/Candidato';
import TotalVotos from '../TotalVotos/TotalVotos';
import VotosIndividuales from '../VotosIndividuales/VotosIndividuales';
import Filtro from '../Filtro/Filtro';

function SistemaVotacion() {
  return (
    <main>
      <Candidato />
      <Filtro />
      <TotalVotos />
      <VotosIndividuales />
    </main>
  );
}

export default SistemaVotacion;
