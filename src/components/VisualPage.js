import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import BlockQuote from '../ChapterIntro/BlockQuote';

import * as all from '../ChapterIntro/IntroData'
import * as one from '../ChapterOne/OneData'
import QuestionList from '../ChapterIntro/QuestionList';
import FullSloka from '../ChapterIntro/FullSloka';
import QnAData from '../ChapterIntro/QnAData';

import GitaSummary from '../ChapterIntro/GitaSummary';
import GitaShort from '../ChapterIntro/GitaShort';
import BGChapterIndex from './BGChapterIndex';
import { IntroRoute, OneRoute } from '../Route';
import BGChapterEnd from './BGChapterEnd';
import ImageTitle from '../ChapterOne/ImageTitle';
import SlokaChat from './SlokaChat';


function VisualPage() {

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '/Visual-Gita/' ||
    window.location.pathname === '/Visual-Gita') {
      navigate('/Visual-Gita/intro')
  }
  })
  

  return (
    <div className='h-full bg-white rounded-2xl p-2 '>
        <Routes>
          <Route exact path='/Visual-Gita/intro' element={<BGChapterIndex data={IntroRoute} chapter=' Bhagabad Gita: Intro'/>}/>
          <Route exact path='/Visual-Gita/intro/guru-pronam' element={<BlockQuote data={all.GuruPranam}/>}/>
          <Route exact path='/Visual-Gita/intro/gita-great-life' element={<BlockQuote data={all.LessonOne}/>}/>
          <Route exact path='/Visual-Gita/intro/manual-of-life' element={<BlockQuote data={all.LessonTwo}/>}/>
          <Route exact path='/Visual-Gita/intro/clarity-of-lfe' element={<BlockQuote data={all.LessonThree}/>}/>
          <Route exact path='/Visual-Gita/intro/puspose-and-important' element={<QuestionList/>}/>
          <Route exact path='/Visual-Gita/intro/gita-dyanam' element={<FullSloka data={all.GitaDhyanam}/>}/>
          <Route exact path='/Visual-Gita/intro/gita-fact' element={<QnAData data={all.IntroQnA}/>}/>
          <Route exact path='/Visual-Gita/intro/gita-love-message' element={<GitaShort/>}/>
          <Route exact path='/Visual-Gita/intro/chapters-1-to-6' element={<GitaSummary data={all.BGOneToSix}/>}/>
          <Route exact path='/Visual-Gita/intro/chapters-7-to-12' element={<GitaSummary data={all.BGSevenToTwelve}/>}/>
          <Route exact path='/Visual-Gita/intro/chapters-13-to-18' element={<GitaSummary data={all.BGthirteenToEighteen}/>}/>
          <Route exact path='/Visual-Gita/intro/journey-within' element={<BlockQuote data={all.LessonFour}/>}/>
          <Route exact path='/Visual-Gita/intro/back-to-godhead' element={<BlockQuote data={all.EndPravupadBani}/>}/>
          <Route exact path='/Visual-Gita/intro/conclusion' element={<BGChapterEnd data={all.EndConclusion}/>}/>
        
        
        <Route exact path='/Visual-Gita/one' element={<BGChapterIndex data={OneRoute} chapter=' Bhagabad Gita: Intro'/>}/>
        <Route exact path='/Visual-Gita/one/mahabharat' element={<ImageTitle data={one.KuruDynasty}/>}/>
        <Route exact path='/Visual-Gita/one/mahabharat-map' element={<ImageTitle data={one.MahabharatMap}/>}/>
        <Route exact path='/Visual-Gita/one/sloka-1' element={<BlockQuote data={one.bg1_1}/>}/>
        <Route exact path='/Visual-Gita/one/1-translate' element={<BlockQuote data={one.bg1_1_trans}/>}/>
        <Route exact path='/Visual-Gita/one/lesson-1' element={<BlockQuote data={one.Lesson1One}/>}/>
        <Route exact path='/Visual-Gita/one/1-2' element={<SlokaChat data={one.One1_2}/>}/>
        <Route exact path='/Visual-Gita/one/2-3' element={<SlokaChat data={one.One3_6}/>}/>
        <Route exact path='/Visual-Gita/one/4-11' element={<SlokaChat data={one.One7_11}/>}/>
        <Route exact path='/Visual-Gita/one/lesson-2' element={<BlockQuote data={one.Lesson1Two}/>}/>
        <Route exact path='/Visual-Gita/one/sloka-12' element={<BlockQuote data={one.SlokaOne12}/>}/>
        <Route exact path='/Visual-Gita/one/lesson-3' element={<BlockQuote data={one.Lesson1Three}/>}/>
        <Route exact path='/Visual-Gita/intro/blew-conchshell' element={<GitaSummary data={one.BGCounchshell}/>}/>
        
        
        </Routes>


    </div>
  )
}

export default VisualPage