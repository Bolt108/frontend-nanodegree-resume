var bio = {

    "name": "Raghav Goyal",
    "role": "Student",
    "contacts": {
        "mobile": "8528528528",
        "email": "demotest@gmail.com",
        "github": "@Bolt108",
        "location": "Hong Kong",
    },
    "welcomeMessage": "Hi I am Raghav. This image is a placeholder because I currently don't have a very up to date photo.",
    "skills": ["Basketball", "Programming", "IOT"],
    "biopic": "/Users/raghavgoyal/Desktop/frontend-nanodegree-resume-master/images/fry.jpg",
};

var education = {

    "schools": [

        {
            "name": "CIS",
            "location": "Hong Kong",
            "degree": "Secondary School",
            "majors": ["Digital Design", "Science", "Mathematics", "English", "Chinese", "Physical Education", "Film", "Economics"],
            "dates": "2005-2019",
            "url": "cis.edu.hk"

        }
    ],
    "onlineCourses": [

        {
            "title": "Introduction to Programming",
            "school": "Udacity",
            "dates": "2017",
            "url": "udacity.com"
        }

    ]
};


var work = {

    "jobs": [

        {
            "employer": "CIS",
            "title": "CIS",
            "location": "Hong Kong",
            "dates": "August to June",
            "description": "I am a Year 11/Grade 10 student going into Year 12/Grade 11 at Chinese International School in Hong Kong. I can't wait for summer to come."
        },

        {
            "employer": "Me",
            "title": "Udacity",
            "location": "Hong Kong",
            "dates": "Month of May",
            "description": "Introduction to Programming is my first Udacity Nanodegree."
        }

    ]
};


var projects = {

    "projects": [

        {
            "title": "Rubber Band Shooter",
            "dates": "2011-2012",
            "description": "I built a rubber band shooter using the Arduino Uno.",
            "images": ["/Users/raghavgoyal/Desktop/frontend-nanodegree-resume-master/images/fry.jpg", "/Users/raghavgoyal/Desktop/frontend-nanodegree-resume-master/images/197x148.gif"]

        },

        {
            "title": "Labrynth and Color Simon Says Remix",
            "dates": "2011-2012",
            "description": "I built a remix of the classic labrynth board game and the color version of Simon Says using the Arduino Uno.",
            "images": ["/Users/raghavgoyal/Desktop/frontend-nanodegree-resume-master/images/fry.jpg", "/Users/raghavgoyal/Desktop/frontend-nanodegree-resume-master/images/197x148.gif"]
        }

    ]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkills);
    }



};

bio.display();


education.display = function() {

    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedschoolName);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedschoolMajors);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedschoolDates);

    });


    education.onlineCourses.forEach(function(course) {

        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".education-entry:last").append(formattedonlineTitle);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedonlineSchool);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedonlineDates);

        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedonlineURL);

    });

};

education.display();



work.display = function() {

    work.jobs.forEach(function(item) {

        $("#workExperience").append(HTMLworkStart);
        var formattedjobTitle = HTMLworkTitle.replace("%data%", item.title);
        var formattedjobEmployer = HTMLworkEmployer.replace("%data%", item.employer);
        var formattedEmployerName = formattedjobEmployer + formattedjobTitle;
        $(".work-entry:last").append(formattedEmployerName);
        var formattedDates = HTMLworkDates.replace("%data%", item.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", item.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

/*$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY)
});
*/
/*
$("#main").append(internationalizeButton)

function inName(name){

	var nameArray = name.split(" ");
	var lastName = nameArray[1].toUpperCase();
	nameArray.splice(1,1);
	nameArray.push(lastName);
	return nameArray.join(" ");

}*/

projects.display = function() {

    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedprojectTitle);

        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedprojectDates);

        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedprojectDescription);

        var formattedprojectImages = HTMLprojectImage.replace("%data%", project.images[1]);
        $(".project-entry:last").append(formattedprojectImages);
    });
};

projects.display();



$("#mapDiv").append(googleMap);