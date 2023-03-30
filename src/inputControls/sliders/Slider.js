import React,{useState,useEffect} from 'react';
import './Slider.css';
import LazyLoad from 'react-lazyload';

function Slider(props) {

	const [clsNam,setClsNam] = useState("");
   const [imag,setImg] = useState([]);
   const [classCheck, setClassCheck] = useState("");
	  var ind = 0;
		const [idIntrval, setIdIntrval] = useState("");
	 useEffect(()=>{
		 if(props.data.length > 0)
		 {
			setImg(props.data);
		 }
		 if(imag.length > 0)
		 {
			if(props.blur)
			 {
				 setClsNam(" mySlides custWid80 w3-animate-fading ");
				 setIdIntrval("carousel");
				carousel();
			 }
			 if(!!props.slideDirection && props.slideDirection !== "")
			 {
				 setClsNam(" mySlides custWid80 w3-animate-"+props.slideDirection);
				 setIdIntrval("carousel");
				 carousel();
			 }
		 }
		 if(props.fixedContent === false)
		 {
			setClassCheck(" dispFlx notFxdCls");
		 }
		 else {
			 setClassCheck(" dispFlxCont fxdCls");
		 }
		 // eslint-disable-next-line
	 },[...props.data]);

	 useEffect(()=>{
		 if(imag.length > 0)
		 {
			if(props.blur)
			 {
				 setClsNam(" mySlides custWid80 w3-animate-fading ")
				carousel();
				setIdIntrval("carousel");
			 }
			 if(!!props.slideDirection && props.slideDirection !== "")
			 {
				 setClsNam(" mySlides custWid80 w3-animate-"+props.slideDirection);
				carousel();
				setIdIntrval("carousel");
			 }
		 }
		 // eslint-disable-next-line
	},[imag.length === props.data.length]);

	useEffect(()=>{
		if(props.fixedData === false)
		{
			const id = setInterval(carousel, props.timeDurationSlide);
			return () => {
				clearInterval(id);
			}
		}
		// eslint-disable-next-line
	},[idIntrval])

	const handleCursolPosition = (pindex) => {
		// console.log("clicked in position "+pindex);
		ind = pindex;
		carousel("fromClicked");
	};

	 const carousel = (pfalg) => {
		 if(props.fixedData === false)
		 {
				//  console.log("Incorosal");
				let i;
				let img = [...imag];
				 for (i = 0; i < img.length; i++) {
					 img[i].currentCls = " hideImg hideDots";
				 }
				 ind++;
				 if (ind > img.length) {ind = 1}
				 img[ind-1].currentCls = " showImg showDots";
				 setImg(img);
				 if(pfalg !== "fromClicked") {

				 }
		 }
	 }
	  return (

			<div className={[classCheck, "w3-display-container", props.customClass, "slidd"].join(' ')}>
				<div className="wid40Per carslPrpty alignCentr ">


				{
					props.fixedContent === false ?
					imag.map((imageg,index) => (<div key={props.keyData+"wid40_"+index} className={"margnAutoCls currSlideChk "+imageg.currentCls + clsNam}>
						<p className="teamsure-txt">{index === 0 && ""} <span className="teamsure-color-blue"></span></p>
						<h1 className="mainHeading_max SlideHead_old sldWidSet">
							{imageg.head}
						</h1>
						<h2 className=" contentTxt slideContent_old slidSubCntWid">{imageg.sub}</h2>
						</div>
				))
				: (<div key={props.keyData+"wid40_"} className="sld_mar_lft">
					<p className=" mainHeading_max SlideHead_old">{props.content.Head}</p>
					<p className=" contentTxt slideContent_old sld_hid_cls">{props.content.subcontent}</p></div>
					)
				}
				</div>
				<div className="wid60Per carslPrpty currSlideChk">
				{
					imag.map((imageg,index) => (
						<LazyLoad>
						<img key={props.keyData+"slide3_"+index} className={"imgSlideCls "+clsNam + imageg.currentCls} src={imageg.imgPath} alt="Employee Healthcare at your fingertips " />
						</LazyLoad>
					))
				}
				</div>

				<div className=" w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle custWidth100_old marbtm5 curosalDots">
				{
					props.carosalDots === true ?
					imag.map((imageg,index) => (
						<span key={props.keyData+"spanSlider_"+index}className={" w3-badge demo w3-border w3-transparent w3-hover-white curslDotCls "+imageg.currentCls} onClick={() => handleCursolPosition(index)}></span>))
					: null
					}
					</div>

			</div>

	  )

}

export default Slider;
