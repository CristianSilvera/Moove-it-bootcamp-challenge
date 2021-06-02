//Esto va a funcionar como un cotenedor de las notas y ayuda a ubicar mejor los layouts, darle estilos, etc.
import Note from './Note';

const NotesList = () => {
    return <div className='notes-list'>
        <Note /> 
        <Note /> 
        <Note /> 
        <Note /> 
    </div>
}

export default NotesList;