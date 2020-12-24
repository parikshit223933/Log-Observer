import express from 'express';

export const renderHome = (req:express.Request, res:express.Response)=>
{
  res.render('home', {
    title: 'log Observer'
  })
}