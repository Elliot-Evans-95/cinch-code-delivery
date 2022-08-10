import { Presentation } from './presentation/presentation'
import { routes } from './user/routes'
// import { notes } from './notes/notes.route'

// TODO - make notes customizable
// new Presentation([notes, ...routes])
new Presentation([...routes])
