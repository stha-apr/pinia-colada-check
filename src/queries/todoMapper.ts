export function fromDTO(fromDTO) {
  return {
    ...fromDTO,
    dies: fromDTO.content + " das ist jetzt ja wilrklich",
    active: false,
    content: fromDTO.content + ' ach was'
  }
}
