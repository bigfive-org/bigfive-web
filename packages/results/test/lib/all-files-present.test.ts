import { readdir } from 'fs/promises'
const languagePath = './src/data'
const isFolder = (item: string): boolean => item !== 'languages.ts'
const expectedFiles = [
  'agreeableness.ts',
  'conscientiousness.ts',
  'extraversion.ts',
  'index.ts',
  'neuroticism.ts',
  'openness_to_experience.ts'
]

it('it has all files in language folder', async () => {
  const langs = await readdir(languagePath)
  const langFolders = langs.filter(isFolder)
  const paths = langFolders.map((folder: string) => `${languagePath}/${folder}`)
  const allFiles = await Promise.all(paths.map(async (path: string) => await readdir(path)))
  allFiles.forEach(files => {
    expect(files).toEqual(expectedFiles)
  })
})
