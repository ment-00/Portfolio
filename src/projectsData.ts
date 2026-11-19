export type Project = {
  title: string
  desc: string
  tags: string[]
  image: string
  link?: string
}

// To add a project: copy one block, change the text, and put the picture in public/projects/
export const projects: Project[] = [
  {
    title: 'Ventryx',
    desc: 'A web-based system that replaces the handwritten logbook with one digital process and gives visitors of the University of San Agustin a QR pass.',
    tags: ['HTML', 'CSS'],
    image: '/projects/ventryx.png',
  },
  {
    title: 'Running Late',
    desc: "A six-panel storyboard developed into a short video titled Running Late. The project follows a student's rushed morning, from sleeping through the alarm to arriving late at school. It involved planning the visual sequence, illustrating key scenes, and translating the storyboard into a video narrative through timing, transitions, and visual storytelling.",
    tags: ['Adobe Premiere', 'Phone Camera'],
    image: '/projects/runninglate.png',
  },
  {
    title: 'Behind the Campus',
    desc: 'A campus interview video created as part of a video manipulation laboratory activity. Working with a partner, we captured student or staff interviews and supporting campus footage to produce a short vox pop feature. The project involved organizing media, editing A-roll and B-roll, adding lower-third graphics, balancing dialogue and background music through audio ducking, and applying transitions using Adobe Premiere Pro.',
    tags: ['Adobe Premiere', 'Phone Camera', 'Handheld'],
    image: '/projects/voxpop.png',
  },
  {
    title: 'Animation',
    desc: 'A simple 2D animation project focused on creating a bouncing ball using Adobe Animate. The activity involved drawing and converting the ball into a graphic symbol, setting keyframes, and applying classic tweens and easing to create smooth, natural-looking movement. It served as an introduction to keyframe animation, timing, and basic motion principles.',
    tags: ['Adobe Animate', '2D Animation '],
    image: '/projects/animate.jpg',
  },


  {
    title: 'Back Alley',
    desc: "A short sound design project focused on building an immersive audio experience for a 5–10-second video clip. The activity involved layering ambient sounds, Foley effects, action sound effects, and music to match the visuals and establish the scene's mood. It also introduced audio synchronization, volume balancing, and fade transitions to create a clean and cohesive final mix.",
    tags: ['Canva', 'Sound Design'],
    image: '/projects/sound.png',
  },
]
