// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/component/Home').default;

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
