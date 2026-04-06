import Note from '../models/Note.js';

// @desc    Upload a new note
// @route   POST /api/notes/upload
// @access  Public
const uploadNote = async (req, res) => {
  try {
    const { title, subject, description } = req.body;

    if (!title || !subject) {
      return res.status(400).json({ message: 'Title and subject are required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'File is required' });
    }

    const note = new Note({
      title,
      subject,
      description,
      fileUrl: `/uploads/${req.file.filename}`,
    });

    const createdNote = await note.save();
    res.status(201).json(createdNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all notes
// @route   GET /api/notes
// @access  Public
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single note by ID
// @route   GET /api/notes/:id
// @access  Public
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a note
// @route   PUT /api/notes/:id
// @access  Public
const updateNote = async (req, res) => {
  try {
    const { title, subject, description } = req.body;
    const note = await Note.findById(req.params.id);

    if (note) {
      note.title = title || note.title;
      note.subject = subject || note.subject;
      note.description = description === undefined ? note.description : description;

      if (req.file) {
        note.fileUrl = `/uploads/${req.file.filename}`;
      }

      const updatedNote = await note.save();
      res.json(updatedNote);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update note status
// @route   PATCH /api/notes/:id/status
// @access  Public
const updateNoteStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const note = await Note.findById(req.params.id);

    if (note) {
      note.status = status;
      const updatedNote = await note.save();
      res.json(updatedNote);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Public
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (note) {
      await note.deleteOne();
      res.json({ message: 'Note removed' });
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { uploadNote, getNotes, getNoteById, updateNote, updateNoteStatus, deleteNote };
