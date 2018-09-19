import chalk from 'chalk'

export const log = (message, color = 'blue') => {
    console.log(chalk[color](message))
}