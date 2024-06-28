import { TechnologyRepository } from '../../../repositories/local/TechnologyRepository'

export const fetchTechnologies = () => {
    return TechnologyRepository.getTechnologies()
}
