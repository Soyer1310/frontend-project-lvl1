#!/usr/bin/env node
import index from '../src/index.js';
import { task, getQuestion, getAnswer } from '../games/brain-progression-module.js';

index(task, getQuestion, getAnswer);
