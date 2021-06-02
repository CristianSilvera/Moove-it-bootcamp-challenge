//Esto va a funcionar como un cotenedor de las notas y ayuda a ubicar mejor los layouts, darle estilos, etc.
import Note from './Note';

const NotesList = ({
	notes

}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					
				/>
			))}
		</div>
	);
};

export default NotesList;