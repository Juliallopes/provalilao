
import {CadastreVilao} from '../../api/usuarioAPI.js'
export default function Cad() { 

    const [nmvilao, setNomeVilao] = useState('');
  const [maladades, setMaladades] = useState('');
  const [suer_poder, setSuer_poder] = useState('')

  return(
    <div className='corzinha2'>

        <div className='content'>
             <div className='loginsub'>
    
                <main className="login">
    
                <h1 className='tit-login'>Cadastre o vilão</h1> 
    
                <p> 
                     <label class="lab">Nome do vilão</label>
                    <input id="nm_vilao" name="nm_vilao" 
                    className='cad nome'
                     required="required" type="text" placeholder="Quem é o seu vilão" value={nmvilao} onChange={e => setNomePerfil(e.target.value)}  />
                </p>
    
    
                <p> 
                    <label class="lab">  As suas maldades </label>
                    <input id="nm_maladades" name="maladades" required="required" type="maladades" 
                    className='maldades'
                    placeholder="Insira as maldades :("  value={nmmalades} onChange={e => setMaladades(e.target.value)}/>
                    </p>
                    
                
       

)
}