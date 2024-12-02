var displayDescription = function(n){
	s1 = "pbox-";

	proj1Desc = "A Pan-Cancer Organoid Platform for Precision Medicine";
	proj2Desc = "Artificial fluorescent image systems and methods";
	proj3Desc = "Using computer vision to resolve proliferative dynamics within therapeutic responses in large scale screens of patient derived models";
	proj4Desc = "Developed an IOT based intelligent wearable device for the safety and security of women and girl children";
	proj5Desc = "Applying machine vision to empower preclinical development of cell engager and adoptive cell therapeutics in patient-derived organoid models of solid tumors";
	proj6Desc = "Tinkered a bit with some web development frameworks like Bootstrap and JavaScript to get this website to look presentable! (I hope)";

	proj1Link = "https://www.cell.com/cell-reports/fulltext/S2211-1247(21)00846-9";
	proj2Link = "https://patents.google.com/patent/US11561178B2/en";
	proj3Link = "https://aacrjournals.org/cancerres/article/83/7_Supplement/5402/720578";
	proj4Link = "https://ieeexplore.ieee.org/document/7808003/";
	proj5Link = "https://jitc.bmj.com/content/9/Suppl_2/A70";
	proj6Link = "https://github.com/MadhviKannan/";

	selectedProjDesc = "";
	selectedProjLink = "";
	getLink=""

	if(n==1){
		selectedProjDesc = proj1Desc;
		selectedProjLink = proj1Link;
	}
	else if(n==2){
		selectedProjDesc = proj2Desc;
		selectedProjLink = proj2Link;
	}
	else if(n==3){
		selectedProjDesc = proj3Desc;
		selectedProjLink = proj3Link;
	}
	else if(n==4){
		selectedProjDesc = proj4Desc;
		selectedProjLink = proj4Link;
	}
	else if(n==5){
		selectedProjDesc = proj5Desc;
		selectedProjLink = proj5Link;
	}
	else if(n==6){
		selectedProjDesc = proj6Desc;
		selectedProjLink = proj6Link;
	}
	else {

	}

	document.getElementById(s1.concat(n)).innerHTML = "<div class=\"project-name\"></div><p>" + selectedProjDesc + "</p><div class=\"project-category text-faded\"><a style=\"text-decorations:none; color:inherit;\" href=\"" + selectedProjLink + "\"target=\"_blank\">LINK</a></div>";

}

var defaultProj = function(n){

	s1 = "pbox-";

	proj1Name = "Co First Authored a Tempus based publication in Cell Reports";
	proj2Name = "Lead Inventor of patent highlighting my work in Artificial Image Generation using GANs";
	proj3Name = "Presented a poster at AACR 2023";
	proj4Name = "IOT based intelligent wearable device";
	proj5Name = "Tumor Organoid Immune Interactions";
	proj6Name = "Let's make a website about myself! Nothing narcissistic about that.";

	proj1Cat = "Publication";
	proj2Cat = "Patent";
	proj3Cat = "Poster";
	proj4Cat = "Publication";
	proj5Cat = "Poster";
	proj6Cat = "Web Development";

	selectedProjName = "";
	selectedProjCat = "";

	if(n==1){
		selectedProjName = proj1Name;
		selectedProjCat = proj1Cat;
	}
	else if(n==2){
		selectedProjName = proj2Name;
		selectedProjCat = proj2Cat;
	}
	else if(n==3){
		selectedProjName = proj3Name;
		selectedProjCat = proj3Cat;
	}
	else if(n==4){
		selectedProjName = proj4Name;
		selectedProjCat = proj4Cat;
	}
	else if(n==5){
		selectedProjName = proj5Name;
		selectedProjCat = proj5Cat;
	}
	else if(n==6){
		selectedProjName = proj6Name;
		selectedProjCat = proj6Cat;
	}
	else{

	}

	document.getElementById(s1.concat(n)).innerHTML = "<div class=\"project-category text-faded\">" + selectedProjCat + "</div><div class=\"project-name\">" + selectedProjName + "</div>";

}
