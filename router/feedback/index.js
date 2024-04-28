const {CNVFeedback,getCNV,
    DLDFeedback,getDLD,
    DSAFeedback,getDSA
    ,EM2Feedback,getEM2,
    OOPLFeedback,getOOPL,
    HUMANITYFeedback,getHUMANITY,
    EStudiesFeedback,getEStudies





} =require('../../Controllers/Feedback/sem2')
const route=require('express').Router();
route.post('/cnv',CNVFeedback)
route.get('/cnv',getCNV)
route.post('/dld',DLDFeedback)
route.get('/dld',getDLD)
route.post('/dsa',DSAFeedback)
route.get('/dsa',getDSA)
route.post('/em2',EM2Feedback)
route.get('/em2',getEM2)
route.post('/OOPL',OOPLFeedback)
route.get('/OOPL',getOOPL)
route.post('/HUMANITY',HUMANITYFeedback)
route.get('/HUMANIY',getHUMANITY)
route.post('/EStudies',EStudiesFeedback)
route.get('/EStudies',getEStudies)
module.exports=route;