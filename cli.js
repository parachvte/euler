#!/usr/bin/env node

const util = require('util')
const fs = require('fs')

function help() {
    console.log('Usage: ./cli.js run [problem id]')
    process.exit(1)
}

function format_problem_id(problem_id) {
    if (Number.isNaN(parseInt(problem_id))) help()

    if (problem_id.length == 1) {
        return '00' + problem_id
    } else if (problem_id.length == 2) {
        return '0' + problem_id
    }
    return problem_id
}

function start_problem(problem_id) {
    fs.mkdir(problem_id)

    const template_code = [
        'function main() {',
        '}',
        'exports.main = main'].join('\n')

    fs.writeFile(problem_id + '/index.js', template_code)
}

function run_problem(problem_id) {
    const solution = require('./' + problem_id)
    solution.main()
}

if (process.argv[2] === 'run') {
    const problem_id = format_problem_id(process.argv[3])
    run_problem(problem_id)
} else if (process.argv[2] === 'start') {
    const problem_id = format_problem_id(process.argv[3])
    start_problem(problem_id)
}
