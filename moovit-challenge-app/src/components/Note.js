import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return <div className='note'>
        <span>Esto es una nota!</span>


        <div className='note-footer'>
            <small>20/01/2020</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>



    </div>
}

export default Note;