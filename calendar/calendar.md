<script src='lib/moment.min.js'></script>
<script src='lib/jquery.min.js'></script>
<script src='fullcalendar.min.js'></script>
<script src='locale-all.js'></script>
<!--<script src='events.json'></script>//-->
<script>

  $(document).ready(function() {
    var initialLocaleCode = 'de';


    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      locale: initialLocaleCode,
      buttonIcons: false, // show the prev/next text
      weekNumbers: false,
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      views: {
        listWeek: { buttonText: 'Liste' }
      },
      defaultView: 'listWeek',
      eventLimit: true, // allow "more" link when too many events
      events: [
{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-01T14:00',
    end: '2019-01-01T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-01T16:00',
    end: '2019-01-01T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-01T15:00',
    end: '2019-01-01T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-01T15:00',
    end: '2019-01-01T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-01T16:00',
    end: '2019-01-01T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-01T14:00',
    end: '2019-01-01T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-01T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-01T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-01T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-01T15:30',
    end: '2019-01-01T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-01T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-01T16:00',
    end: '2019-01-01T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-01T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-01T18:00',
    end: '2019-01-01T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-02T13:00',
    end: '2019-01-02T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-02T16:00',
    end: '2019-01-02T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-02T14:00',
    end: '2019-01-02T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-02T15:00',
    end: '2019-01-02T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-02T14:30',
    end: '2019-01-02T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-02T17:00',
    end: '2019-01-02T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-02T16:00',
    end: '2019-01-02T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-02T17:30',
    end: '2019-01-02T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-02T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-02T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-02T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-02T15:00',
    end: '2019-01-02T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-02T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-02T14:00',
    end: '2019-01-02T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-02T17:00',
    end: '2019-01-02T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-03T14:00',
    end: '2019-01-03T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-03T14:00',
    end: '2019-01-03T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-03T16:00',
    end: '2019-01-03T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-03T15:00',
    end: '2019-01-03T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-03T15:00',
    end: '2019-01-03T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-03T17:00',
    end: '2019-01-03T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-03T15:00',
    end: '2019-01-03T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-03T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-03T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-03T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-03T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-03T15:30',
    end: '2019-01-03T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-03T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-03T15:00',
    end: '2019-01-03T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-03T16:00',
    end: '2019-01-03T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-03T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-04T13:00',
    end: '2019-01-04T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-04T16:00',
    end: '2019-01-04T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-04T14:00',
    end: '2019-01-04T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-04T15:00',
    end: '2019-01-04T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-04T18:00',
    end: '2019-01-04T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-04T15:00',
    end: '2019-01-04T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-04T16:00',
    end: '2019-01-04T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-04T17:30',
    end: '2019-01-04T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-04T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-04T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-04T15:00',
    end: '2019-01-04T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-04T16:00',
    end: '2019-01-04T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-04T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-05T10:00',
    end: '2019-01-05T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-05T13:00',
    end: '2019-01-05T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-05T12:00',
    end: '2019-01-05T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-07T15:00',
    end: '2019-01-07T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-07T16:00',
    end: '2019-01-07T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-07T15:00',
    end: '2019-01-07T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-07T16:00',
    end: '2019-01-07T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-07T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-07T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-07T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-07T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-07T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-07T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-07T16:00',
    end: '2019-01-07T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-07T18:00',
    end: '2019-01-07T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-07T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-07T20:00',
    end: '2019-01-07T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-08T14:00',
    end: '2019-01-08T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-08T16:00',
    end: '2019-01-08T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-08T15:00',
    end: '2019-01-08T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-08T15:00',
    end: '2019-01-08T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-08T16:00',
    end: '2019-01-08T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-08T14:00',
    end: '2019-01-08T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-08T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-08T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-08T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-08T15:30',
    end: '2019-01-08T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-08T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-08T16:00',
    end: '2019-01-08T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-08T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-08T18:00',
    end: '2019-01-08T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-09T13:00',
    end: '2019-01-09T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-09T16:00',
    end: '2019-01-09T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-09T14:00',
    end: '2019-01-09T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-09T15:00',
    end: '2019-01-09T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-09T14:30',
    end: '2019-01-09T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-09T17:00',
    end: '2019-01-09T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-09T16:00',
    end: '2019-01-09T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-09T17:30',
    end: '2019-01-09T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-09T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-09T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-09T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-09T15:00',
    end: '2019-01-09T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-09T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-09T14:00',
    end: '2019-01-09T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-09T17:00',
    end: '2019-01-09T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-10T14:00',
    end: '2019-01-10T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-10T14:00',
    end: '2019-01-10T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-10T16:00',
    end: '2019-01-10T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-10T15:00',
    end: '2019-01-10T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-10T15:00',
    end: '2019-01-10T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-10T17:00',
    end: '2019-01-10T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-10T15:00',
    end: '2019-01-10T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-10T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-10T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-10T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-10T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-10T15:30',
    end: '2019-01-10T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-10T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-10T15:00',
    end: '2019-01-10T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-10T16:00',
    end: '2019-01-10T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-10T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-11T13:00',
    end: '2019-01-11T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-11T16:00',
    end: '2019-01-11T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-11T14:00',
    end: '2019-01-11T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-11T15:00',
    end: '2019-01-11T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-11T18:00',
    end: '2019-01-11T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-11T15:00',
    end: '2019-01-11T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-11T16:00',
    end: '2019-01-11T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-11T17:30',
    end: '2019-01-11T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-11T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-11T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-11T15:00',
    end: '2019-01-11T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-11T16:00',
    end: '2019-01-11T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-11T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-12T10:00',
    end: '2019-01-12T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-12T13:00',
    end: '2019-01-12T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-12T12:00',
    end: '2019-01-12T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-14T15:00',
    end: '2019-01-14T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-14T16:00',
    end: '2019-01-14T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-14T15:00',
    end: '2019-01-14T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-14T16:00',
    end: '2019-01-14T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-14T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-14T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-14T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-14T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-14T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-14T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-14T16:00',
    end: '2019-01-14T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-14T18:00',
    end: '2019-01-14T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-14T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-14T20:00',
    end: '2019-01-14T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-15T14:00',
    end: '2019-01-15T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-15T16:00',
    end: '2019-01-15T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-15T15:00',
    end: '2019-01-15T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-15T15:00',
    end: '2019-01-15T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-15T16:00',
    end: '2019-01-15T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-15T14:00',
    end: '2019-01-15T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-15T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-15T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-15T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-15T15:30',
    end: '2019-01-15T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-15T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-15T16:00',
    end: '2019-01-15T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-15T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-15T18:00',
    end: '2019-01-15T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-16T13:00',
    end: '2019-01-16T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-16T16:00',
    end: '2019-01-16T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-16T14:00',
    end: '2019-01-16T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-16T15:00',
    end: '2019-01-16T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-16T14:30',
    end: '2019-01-16T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-16T17:00',
    end: '2019-01-16T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-16T16:00',
    end: '2019-01-16T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-16T17:30',
    end: '2019-01-16T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-16T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-16T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-16T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-16T15:00',
    end: '2019-01-16T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-16T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-16T14:00',
    end: '2019-01-16T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-16T17:00',
    end: '2019-01-16T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-17T14:00',
    end: '2019-01-17T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-17T14:00',
    end: '2019-01-17T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-17T16:00',
    end: '2019-01-17T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-17T15:00',
    end: '2019-01-17T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-17T15:00',
    end: '2019-01-17T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-17T17:00',
    end: '2019-01-17T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-17T15:00',
    end: '2019-01-17T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-17T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-17T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-17T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-17T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-17T15:30',
    end: '2019-01-17T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-17T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-17T15:00',
    end: '2019-01-17T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-17T16:00',
    end: '2019-01-17T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-17T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-18T13:00',
    end: '2019-01-18T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-18T16:00',
    end: '2019-01-18T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-18T14:00',
    end: '2019-01-18T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-18T15:00',
    end: '2019-01-18T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-18T18:00',
    end: '2019-01-18T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-18T15:00',
    end: '2019-01-18T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-18T16:00',
    end: '2019-01-18T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-18T17:30',
    end: '2019-01-18T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-18T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-18T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-18T15:00',
    end: '2019-01-18T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-18T16:00',
    end: '2019-01-18T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-18T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-19T10:00',
    end: '2019-01-19T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-19T13:00',
    end: '2019-01-19T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-19T12:00',
    end: '2019-01-19T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-21T15:00',
    end: '2019-01-21T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-21T16:00',
    end: '2019-01-21T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-21T15:00',
    end: '2019-01-21T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-21T16:00',
    end: '2019-01-21T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-21T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-21T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-21T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-21T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-21T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-21T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-21T16:00',
    end: '2019-01-21T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-21T18:00',
    end: '2019-01-21T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-21T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-21T20:00',
    end: '2019-01-21T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-22T14:00',
    end: '2019-01-22T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-22T16:00',
    end: '2019-01-22T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-22T15:00',
    end: '2019-01-22T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-22T15:00',
    end: '2019-01-22T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-22T16:00',
    end: '2019-01-22T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-22T14:00',
    end: '2019-01-22T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-22T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-22T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-22T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-22T15:30',
    end: '2019-01-22T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-22T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-22T16:00',
    end: '2019-01-22T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-22T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-22T18:00',
    end: '2019-01-22T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-23T13:00',
    end: '2019-01-23T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-23T16:00',
    end: '2019-01-23T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-23T14:00',
    end: '2019-01-23T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-23T15:00',
    end: '2019-01-23T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-23T14:30',
    end: '2019-01-23T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-23T17:00',
    end: '2019-01-23T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-23T16:00',
    end: '2019-01-23T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-23T17:30',
    end: '2019-01-23T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-23T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-23T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-23T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-23T15:00',
    end: '2019-01-23T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-23T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-23T14:00',
    end: '2019-01-23T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-23T17:00',
    end: '2019-01-23T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-24T14:00',
    end: '2019-01-24T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-24T14:00',
    end: '2019-01-24T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-24T16:00',
    end: '2019-01-24T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-24T15:00',
    end: '2019-01-24T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-24T15:00',
    end: '2019-01-24T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-24T17:00',
    end: '2019-01-24T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-24T15:00',
    end: '2019-01-24T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-24T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-24T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-24T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-24T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-24T15:30',
    end: '2019-01-24T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-24T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-24T15:00',
    end: '2019-01-24T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-24T16:00',
    end: '2019-01-24T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-24T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-25T13:00',
    end: '2019-01-25T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-25T16:00',
    end: '2019-01-25T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-25T14:00',
    end: '2019-01-25T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-25T15:00',
    end: '2019-01-25T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-25T18:00',
    end: '2019-01-25T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-25T15:00',
    end: '2019-01-25T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-25T16:00',
    end: '2019-01-25T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-25T17:30',
    end: '2019-01-25T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-25T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-25T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-25T15:00',
    end: '2019-01-25T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-25T16:00',
    end: '2019-01-25T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-25T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-26T10:00',
    end: '2019-01-26T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-26T13:00',
    end: '2019-01-26T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-26T12:00',
    end: '2019-01-26T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-28T15:00',
    end: '2019-01-28T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-28T16:00',
    end: '2019-01-28T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-28T15:00',
    end: '2019-01-28T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-28T16:00',
    end: '2019-01-28T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-28T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-28T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-28T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-28T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-28T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-28T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-28T16:00',
    end: '2019-01-28T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-28T18:00',
    end: '2019-01-28T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-28T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-28T20:00',
    end: '2019-01-28T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-29T14:00',
    end: '2019-01-29T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-29T16:00',
    end: '2019-01-29T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-29T15:00',
    end: '2019-01-29T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-29T15:00',
    end: '2019-01-29T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-29T16:00',
    end: '2019-01-29T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-29T14:00',
    end: '2019-01-29T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-29T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-29T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-29T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-29T15:30',
    end: '2019-01-29T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-29T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-29T16:00',
    end: '2019-01-29T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-29T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-29T18:00',
    end: '2019-01-29T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-30T13:00',
    end: '2019-01-30T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-30T16:00',
    end: '2019-01-30T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-30T14:00',
    end: '2019-01-30T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-30T15:00',
    end: '2019-01-30T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-30T14:30',
    end: '2019-01-30T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-30T17:00',
    end: '2019-01-30T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-30T16:00',
    end: '2019-01-30T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-30T17:30',
    end: '2019-01-30T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-30T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-30T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-30T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-30T15:00',
    end: '2019-01-30T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-30T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-30T14:00',
    end: '2019-01-30T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-30T17:00',
    end: '2019-01-30T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-31T14:00',
    end: '2019-01-31T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-31T14:00',
    end: '2019-01-31T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-01-31T16:00',
    end: '2019-01-31T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-01-31T15:00',
    end: '2019-01-31T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-31T15:00',
    end: '2019-01-31T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-01-31T17:00',
    end: '2019-01-31T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-01-31T15:00',
    end: '2019-01-31T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-01-31T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-31T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-01-31T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-01-31T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-31T15:30',
    end: '2019-01-31T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-01-31T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-31T15:00',
    end: '2019-01-31T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-01-31T16:00',
    end: '2019-01-31T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-01-31T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-01T13:00',
    end: '2019-02-01T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-01T16:00',
    end: '2019-02-01T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-01T14:00',
    end: '2019-02-01T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-01T15:00',
    end: '2019-02-01T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-01T18:00',
    end: '2019-02-01T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-01T15:00',
    end: '2019-02-01T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-01T16:00',
    end: '2019-02-01T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-01T17:30',
    end: '2019-02-01T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-01T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-01T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-01T15:00',
    end: '2019-02-01T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-01T16:00',
    end: '2019-02-01T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-01T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-02T10:00',
    end: '2019-02-02T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-02T13:00',
    end: '2019-02-02T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-02T12:00',
    end: '2019-02-02T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-04T15:00',
    end: '2019-02-04T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-04T16:00',
    end: '2019-02-04T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-04T15:00',
    end: '2019-02-04T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-04T16:00',
    end: '2019-02-04T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-04T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-04T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-04T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-04T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-04T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-04T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-04T16:00',
    end: '2019-02-04T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-04T18:00',
    end: '2019-02-04T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-04T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-04T20:00',
    end: '2019-02-04T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-05T14:00',
    end: '2019-02-05T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-05T16:00',
    end: '2019-02-05T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-05T15:00',
    end: '2019-02-05T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-05T15:00',
    end: '2019-02-05T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-05T16:00',
    end: '2019-02-05T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-05T14:00',
    end: '2019-02-05T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-05T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-05T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-05T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-05T15:30',
    end: '2019-02-05T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-05T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-05T16:00',
    end: '2019-02-05T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-05T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-05T18:00',
    end: '2019-02-05T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-06T13:00',
    end: '2019-02-06T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-06T16:00',
    end: '2019-02-06T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-06T14:00',
    end: '2019-02-06T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-06T15:00',
    end: '2019-02-06T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-06T14:30',
    end: '2019-02-06T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-06T17:00',
    end: '2019-02-06T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-06T16:00',
    end: '2019-02-06T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-06T17:30',
    end: '2019-02-06T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-06T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-06T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-06T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-06T15:00',
    end: '2019-02-06T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-06T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-06T14:00',
    end: '2019-02-06T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-06T17:00',
    end: '2019-02-06T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-07T14:00',
    end: '2019-02-07T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-07T14:00',
    end: '2019-02-07T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-07T16:00',
    end: '2019-02-07T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-07T15:00',
    end: '2019-02-07T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-07T15:00',
    end: '2019-02-07T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-07T17:00',
    end: '2019-02-07T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-07T15:00',
    end: '2019-02-07T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-07T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-07T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-07T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-07T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-07T15:30',
    end: '2019-02-07T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-07T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-07T15:00',
    end: '2019-02-07T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-07T16:00',
    end: '2019-02-07T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-07T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-08T13:00',
    end: '2019-02-08T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-08T16:00',
    end: '2019-02-08T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-08T14:00',
    end: '2019-02-08T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-08T15:00',
    end: '2019-02-08T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-08T18:00',
    end: '2019-02-08T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-08T15:00',
    end: '2019-02-08T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-08T16:00',
    end: '2019-02-08T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-08T17:30',
    end: '2019-02-08T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-08T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-08T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-08T15:00',
    end: '2019-02-08T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-08T16:00',
    end: '2019-02-08T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-08T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-09T10:00',
    end: '2019-02-09T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-09T13:00',
    end: '2019-02-09T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-09T12:00',
    end: '2019-02-09T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-11T15:00',
    end: '2019-02-11T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-11T16:00',
    end: '2019-02-11T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-11T15:00',
    end: '2019-02-11T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-11T16:00',
    end: '2019-02-11T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-11T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-11T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-11T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-11T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-11T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-11T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-11T16:00',
    end: '2019-02-11T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-11T18:00',
    end: '2019-02-11T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-11T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-11T20:00',
    end: '2019-02-11T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-12T14:00',
    end: '2019-02-12T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-12T16:00',
    end: '2019-02-12T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-12T15:00',
    end: '2019-02-12T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-12T15:00',
    end: '2019-02-12T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-12T16:00',
    end: '2019-02-12T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-12T14:00',
    end: '2019-02-12T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-12T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-12T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-12T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-12T15:30',
    end: '2019-02-12T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-12T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-12T16:00',
    end: '2019-02-12T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-12T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-12T18:00',
    end: '2019-02-12T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-13T13:00',
    end: '2019-02-13T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-13T16:00',
    end: '2019-02-13T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-13T14:00',
    end: '2019-02-13T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-13T15:00',
    end: '2019-02-13T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-13T14:30',
    end: '2019-02-13T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-13T17:00',
    end: '2019-02-13T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-13T16:00',
    end: '2019-02-13T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-13T17:30',
    end: '2019-02-13T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-13T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-13T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-13T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-13T15:00',
    end: '2019-02-13T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-13T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-13T14:00',
    end: '2019-02-13T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-13T17:00',
    end: '2019-02-13T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-14T14:00',
    end: '2019-02-14T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-14T14:00',
    end: '2019-02-14T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-14T16:00',
    end: '2019-02-14T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-14T15:00',
    end: '2019-02-14T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-14T15:00',
    end: '2019-02-14T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-14T17:00',
    end: '2019-02-14T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-14T15:00',
    end: '2019-02-14T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-14T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-14T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-14T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-14T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-14T15:30',
    end: '2019-02-14T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-14T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-14T15:00',
    end: '2019-02-14T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-14T16:00',
    end: '2019-02-14T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-14T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-15T13:00',
    end: '2019-02-15T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-15T16:00',
    end: '2019-02-15T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-15T14:00',
    end: '2019-02-15T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-15T15:00',
    end: '2019-02-15T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-15T18:00',
    end: '2019-02-15T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-15T15:00',
    end: '2019-02-15T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-15T16:00',
    end: '2019-02-15T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-15T17:30',
    end: '2019-02-15T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-15T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-15T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-15T15:00',
    end: '2019-02-15T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-15T16:00',
    end: '2019-02-15T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-15T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-16T10:00',
    end: '2019-02-16T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-16T13:00',
    end: '2019-02-16T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-16T12:00',
    end: '2019-02-16T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-18T15:00',
    end: '2019-02-18T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-18T16:00',
    end: '2019-02-18T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-18T15:00',
    end: '2019-02-18T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-18T16:00',
    end: '2019-02-18T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-18T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-18T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-18T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-18T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-18T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-18T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-18T16:00',
    end: '2019-02-18T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-18T18:00',
    end: '2019-02-18T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-18T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-18T20:00',
    end: '2019-02-18T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-19T14:00',
    end: '2019-02-19T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-19T16:00',
    end: '2019-02-19T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-19T15:00',
    end: '2019-02-19T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-19T15:00',
    end: '2019-02-19T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-19T16:00',
    end: '2019-02-19T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-19T14:00',
    end: '2019-02-19T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-19T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-19T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-19T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-19T15:30',
    end: '2019-02-19T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-19T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-19T16:00',
    end: '2019-02-19T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-19T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-19T18:00',
    end: '2019-02-19T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-20T13:00',
    end: '2019-02-20T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-20T16:00',
    end: '2019-02-20T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-20T14:00',
    end: '2019-02-20T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-20T15:00',
    end: '2019-02-20T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-20T14:30',
    end: '2019-02-20T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-20T17:00',
    end: '2019-02-20T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-20T16:00',
    end: '2019-02-20T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-20T17:30',
    end: '2019-02-20T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-20T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-20T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-20T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-20T15:00',
    end: '2019-02-20T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-20T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-20T14:00',
    end: '2019-02-20T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-20T17:00',
    end: '2019-02-20T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-21T14:00',
    end: '2019-02-21T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-21T14:00',
    end: '2019-02-21T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-21T16:00',
    end: '2019-02-21T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-21T15:00',
    end: '2019-02-21T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-21T15:00',
    end: '2019-02-21T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-21T17:00',
    end: '2019-02-21T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-21T15:00',
    end: '2019-02-21T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-21T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-21T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-21T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-21T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-21T15:30',
    end: '2019-02-21T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-21T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-21T15:00',
    end: '2019-02-21T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-21T16:00',
    end: '2019-02-21T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-21T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-22T13:00',
    end: '2019-02-22T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-22T16:00',
    end: '2019-02-22T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-22T14:00',
    end: '2019-02-22T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-22T15:00',
    end: '2019-02-22T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-22T18:00',
    end: '2019-02-22T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-22T15:00',
    end: '2019-02-22T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-22T16:00',
    end: '2019-02-22T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-22T17:30',
    end: '2019-02-22T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-22T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-22T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-22T15:00',
    end: '2019-02-22T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-22T16:00',
    end: '2019-02-22T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-22T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-23T10:00',
    end: '2019-02-23T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-23T13:00',
    end: '2019-02-23T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-23T12:00',
    end: '2019-02-23T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-25T15:00',
    end: '2019-02-25T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-25T16:00',
    end: '2019-02-25T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-25T15:00',
    end: '2019-02-25T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-25T16:00',
    end: '2019-02-25T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-25T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-25T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-25T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-25T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-25T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-25T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-25T16:00',
    end: '2019-02-25T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-25T18:00',
    end: '2019-02-25T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-25T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-25T20:00',
    end: '2019-02-25T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-26T14:00',
    end: '2019-02-26T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-26T16:00',
    end: '2019-02-26T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-26T15:00',
    end: '2019-02-26T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-26T15:00',
    end: '2019-02-26T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-26T16:00',
    end: '2019-02-26T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-26T14:00',
    end: '2019-02-26T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-26T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-26T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-26T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-26T15:30',
    end: '2019-02-26T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-26T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-26T16:00',
    end: '2019-02-26T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-26T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-26T18:00',
    end: '2019-02-26T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-27T13:00',
    end: '2019-02-27T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-27T16:00',
    end: '2019-02-27T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-27T14:00',
    end: '2019-02-27T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-27T15:00',
    end: '2019-02-27T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-27T14:30',
    end: '2019-02-27T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-27T17:00',
    end: '2019-02-27T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-27T16:00',
    end: '2019-02-27T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-27T17:30',
    end: '2019-02-27T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-27T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-27T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-27T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-27T15:00',
    end: '2019-02-27T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-27T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-27T14:00',
    end: '2019-02-27T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-27T17:00',
    end: '2019-02-27T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-28T14:00',
    end: '2019-02-28T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-28T14:00',
    end: '2019-02-28T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-02-28T16:00',
    end: '2019-02-28T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-02-28T15:00',
    end: '2019-02-28T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-28T15:00',
    end: '2019-02-28T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-02-28T17:00',
    end: '2019-02-28T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-02-28T15:00',
    end: '2019-02-28T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-02-28T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-28T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-02-28T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-02-28T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-28T15:30',
    end: '2019-02-28T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-02-28T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-28T15:00',
    end: '2019-02-28T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-02-28T16:00',
    end: '2019-02-28T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-02-28T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-01T13:00',
    end: '2019-03-01T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-01T16:00',
    end: '2019-03-01T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-01T14:00',
    end: '2019-03-01T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-01T15:00',
    end: '2019-03-01T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-01T18:00',
    end: '2019-03-01T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-01T15:00',
    end: '2019-03-01T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-01T16:00',
    end: '2019-03-01T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-01T17:30',
    end: '2019-03-01T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-01T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-01T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-01T15:00',
    end: '2019-03-01T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-01T16:00',
    end: '2019-03-01T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-01T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-02T10:00',
    end: '2019-03-02T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-02T13:00',
    end: '2019-03-02T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-02T12:00',
    end: '2019-03-02T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-04T15:00',
    end: '2019-03-04T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-04T16:00',
    end: '2019-03-04T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-04T15:00',
    end: '2019-03-04T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-04T16:00',
    end: '2019-03-04T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-04T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-04T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-04T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-04T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-04T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-04T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-04T16:00',
    end: '2019-03-04T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-04T18:00',
    end: '2019-03-04T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-04T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-04T20:00',
    end: '2019-03-04T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-05T14:00',
    end: '2019-03-05T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-05T16:00',
    end: '2019-03-05T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-05T15:00',
    end: '2019-03-05T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-05T15:00',
    end: '2019-03-05T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-05T16:00',
    end: '2019-03-05T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-05T14:00',
    end: '2019-03-05T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-05T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-05T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-05T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-05T15:30',
    end: '2019-03-05T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-05T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-05T16:00',
    end: '2019-03-05T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-05T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-05T18:00',
    end: '2019-03-05T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-06T13:00',
    end: '2019-03-06T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-06T16:00',
    end: '2019-03-06T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-06T14:00',
    end: '2019-03-06T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-06T15:00',
    end: '2019-03-06T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-06T14:30',
    end: '2019-03-06T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-06T17:00',
    end: '2019-03-06T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-06T16:00',
    end: '2019-03-06T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-06T17:30',
    end: '2019-03-06T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-06T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-06T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-06T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-06T15:00',
    end: '2019-03-06T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-06T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-06T14:00',
    end: '2019-03-06T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-06T17:00',
    end: '2019-03-06T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-07T14:00',
    end: '2019-03-07T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-07T14:00',
    end: '2019-03-07T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-07T16:00',
    end: '2019-03-07T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-07T15:00',
    end: '2019-03-07T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-07T15:00',
    end: '2019-03-07T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-07T17:00',
    end: '2019-03-07T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-07T15:00',
    end: '2019-03-07T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-07T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-07T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-07T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-07T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-07T15:30',
    end: '2019-03-07T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-07T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-07T15:00',
    end: '2019-03-07T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-07T16:00',
    end: '2019-03-07T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-07T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-08T13:00',
    end: '2019-03-08T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-08T16:00',
    end: '2019-03-08T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-08T14:00',
    end: '2019-03-08T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-08T15:00',
    end: '2019-03-08T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-08T18:00',
    end: '2019-03-08T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-08T15:00',
    end: '2019-03-08T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-08T16:00',
    end: '2019-03-08T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-08T17:30',
    end: '2019-03-08T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-08T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-08T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-08T15:00',
    end: '2019-03-08T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-08T16:00',
    end: '2019-03-08T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-08T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-09T10:00',
    end: '2019-03-09T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-09T13:00',
    end: '2019-03-09T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-09T12:00',
    end: '2019-03-09T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-11T15:00',
    end: '2019-03-11T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-11T16:00',
    end: '2019-03-11T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-11T15:00',
    end: '2019-03-11T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-11T16:00',
    end: '2019-03-11T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-11T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-11T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-11T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-11T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-11T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-11T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-11T16:00',
    end: '2019-03-11T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-11T18:00',
    end: '2019-03-11T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-11T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-11T20:00',
    end: '2019-03-11T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-12T14:00',
    end: '2019-03-12T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-12T16:00',
    end: '2019-03-12T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-12T15:00',
    end: '2019-03-12T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-12T15:00',
    end: '2019-03-12T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-12T16:00',
    end: '2019-03-12T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-12T14:00',
    end: '2019-03-12T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-12T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-12T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-12T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-12T15:30',
    end: '2019-03-12T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-12T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-12T16:00',
    end: '2019-03-12T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-12T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-12T18:00',
    end: '2019-03-12T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-13T13:00',
    end: '2019-03-13T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-13T16:00',
    end: '2019-03-13T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-13T14:00',
    end: '2019-03-13T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-13T15:00',
    end: '2019-03-13T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-13T14:30',
    end: '2019-03-13T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-13T17:00',
    end: '2019-03-13T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-13T16:00',
    end: '2019-03-13T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-13T17:30',
    end: '2019-03-13T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-13T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-13T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-13T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-13T15:00',
    end: '2019-03-13T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-13T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-13T14:00',
    end: '2019-03-13T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-13T17:00',
    end: '2019-03-13T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-14T14:00',
    end: '2019-03-14T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-14T14:00',
    end: '2019-03-14T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-14T16:00',
    end: '2019-03-14T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-14T15:00',
    end: '2019-03-14T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-14T15:00',
    end: '2019-03-14T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-14T17:00',
    end: '2019-03-14T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-14T15:00',
    end: '2019-03-14T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-14T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-14T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-14T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-14T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-14T15:30',
    end: '2019-03-14T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-14T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-14T15:00',
    end: '2019-03-14T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-14T16:00',
    end: '2019-03-14T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-14T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-15T13:00',
    end: '2019-03-15T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-15T16:00',
    end: '2019-03-15T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-15T14:00',
    end: '2019-03-15T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-15T15:00',
    end: '2019-03-15T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-15T18:00',
    end: '2019-03-15T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-15T15:00',
    end: '2019-03-15T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-15T16:00',
    end: '2019-03-15T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-15T17:30',
    end: '2019-03-15T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-15T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-15T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-15T15:00',
    end: '2019-03-15T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-15T16:00',
    end: '2019-03-15T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-15T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-16T10:00',
    end: '2019-03-16T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-16T13:00',
    end: '2019-03-16T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-16T12:00',
    end: '2019-03-16T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-18T15:00',
    end: '2019-03-18T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-18T16:00',
    end: '2019-03-18T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-18T15:00',
    end: '2019-03-18T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-18T16:00',
    end: '2019-03-18T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-18T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-18T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-18T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-18T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-18T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-18T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-18T16:00',
    end: '2019-03-18T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-18T18:00',
    end: '2019-03-18T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-18T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-18T20:00',
    end: '2019-03-18T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-19T14:00',
    end: '2019-03-19T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-19T16:00',
    end: '2019-03-19T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-19T15:00',
    end: '2019-03-19T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-19T15:00',
    end: '2019-03-19T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-19T16:00',
    end: '2019-03-19T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-19T14:00',
    end: '2019-03-19T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-19T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-19T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-19T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-19T15:30',
    end: '2019-03-19T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-19T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-19T16:00',
    end: '2019-03-19T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-19T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-19T18:00',
    end: '2019-03-19T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-20T13:00',
    end: '2019-03-20T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-20T16:00',
    end: '2019-03-20T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-20T14:00',
    end: '2019-03-20T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-20T15:00',
    end: '2019-03-20T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-20T14:30',
    end: '2019-03-20T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-20T17:00',
    end: '2019-03-20T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-20T16:00',
    end: '2019-03-20T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-20T17:30',
    end: '2019-03-20T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-20T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-20T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-20T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-20T15:00',
    end: '2019-03-20T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-20T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-20T14:00',
    end: '2019-03-20T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-20T17:00',
    end: '2019-03-20T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-21T14:00',
    end: '2019-03-21T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-21T14:00',
    end: '2019-03-21T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-21T16:00',
    end: '2019-03-21T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-21T15:00',
    end: '2019-03-21T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-21T15:00',
    end: '2019-03-21T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-21T17:00',
    end: '2019-03-21T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-21T15:00',
    end: '2019-03-21T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-21T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-21T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-21T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-21T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-21T15:30',
    end: '2019-03-21T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-21T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-21T15:00',
    end: '2019-03-21T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-21T16:00',
    end: '2019-03-21T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-21T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-22T13:00',
    end: '2019-03-22T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-22T16:00',
    end: '2019-03-22T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-22T14:00',
    end: '2019-03-22T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-22T15:00',
    end: '2019-03-22T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-22T18:00',
    end: '2019-03-22T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-22T15:00',
    end: '2019-03-22T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-22T16:00',
    end: '2019-03-22T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-22T17:30',
    end: '2019-03-22T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-22T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-22T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-22T15:00',
    end: '2019-03-22T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-22T16:00',
    end: '2019-03-22T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-22T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-23T10:00',
    end: '2019-03-23T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-23T13:00',
    end: '2019-03-23T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-23T12:00',
    end: '2019-03-23T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-25T15:00',
    end: '2019-03-25T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-25T16:00',
    end: '2019-03-25T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-25T15:00',
    end: '2019-03-25T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-25T16:00',
    end: '2019-03-25T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-25T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-25T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-25T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-25T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-25T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-25T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-25T16:00',
    end: '2019-03-25T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-25T18:00',
    end: '2019-03-25T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-25T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-25T20:00',
    end: '2019-03-25T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-26T14:00',
    end: '2019-03-26T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-26T16:00',
    end: '2019-03-26T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-26T15:00',
    end: '2019-03-26T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-26T15:00',
    end: '2019-03-26T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-26T16:00',
    end: '2019-03-26T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-26T14:00',
    end: '2019-03-26T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-26T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-26T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-26T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-26T15:30',
    end: '2019-03-26T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-26T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-26T16:00',
    end: '2019-03-26T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-26T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-26T18:00',
    end: '2019-03-26T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-27T13:00',
    end: '2019-03-27T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-27T16:00',
    end: '2019-03-27T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-27T14:00',
    end: '2019-03-27T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-27T15:00',
    end: '2019-03-27T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-27T14:30',
    end: '2019-03-27T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-27T17:00',
    end: '2019-03-27T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-27T16:00',
    end: '2019-03-27T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-27T17:30',
    end: '2019-03-27T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-27T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-27T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-27T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-27T15:00',
    end: '2019-03-27T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-27T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-27T14:00',
    end: '2019-03-27T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-27T17:00',
    end: '2019-03-27T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-28T14:00',
    end: '2019-03-28T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-28T14:00',
    end: '2019-03-28T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-28T16:00',
    end: '2019-03-28T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-28T15:00',
    end: '2019-03-28T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-28T15:00',
    end: '2019-03-28T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-28T17:00',
    end: '2019-03-28T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-28T15:00',
    end: '2019-03-28T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-03-28T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-28T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-28T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-28T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-28T15:30',
    end: '2019-03-28T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-03-28T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-28T15:00',
    end: '2019-03-28T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-28T16:00',
    end: '2019-03-28T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-28T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-29T13:00',
    end: '2019-03-29T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-29T16:00',
    end: '2019-03-29T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-29T14:00',
    end: '2019-03-29T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-29T15:00',
    end: '2019-03-29T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-03-29T18:00',
    end: '2019-03-29T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-29T15:00',
    end: '2019-03-29T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-29T16:00',
    end: '2019-03-29T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-03-29T17:30',
    end: '2019-03-29T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-03-29T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-03-29T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-29T15:00',
    end: '2019-03-29T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-29T16:00',
    end: '2019-03-29T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-03-29T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-03-30T10:00',
    end: '2019-03-30T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-03-30T13:00',
    end: '2019-03-30T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-03-30T12:00',
    end: '2019-03-30T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-01T15:00',
    end: '2019-04-01T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-01T16:00',
    end: '2019-04-01T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-01T15:00',
    end: '2019-04-01T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-01T16:00',
    end: '2019-04-01T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-01T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-01T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-01T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-01T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-01T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-01T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-01T16:00',
    end: '2019-04-01T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-01T18:00',
    end: '2019-04-01T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-01T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-01T20:00',
    end: '2019-04-01T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-02T14:00',
    end: '2019-04-02T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-02T16:00',
    end: '2019-04-02T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-02T15:00',
    end: '2019-04-02T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-02T15:00',
    end: '2019-04-02T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-02T16:00',
    end: '2019-04-02T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-02T14:00',
    end: '2019-04-02T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-02T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-02T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-02T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-02T15:30',
    end: '2019-04-02T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-02T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-02T16:00',
    end: '2019-04-02T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-02T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-02T18:00',
    end: '2019-04-02T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-03T13:00',
    end: '2019-04-03T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-03T16:00',
    end: '2019-04-03T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-03T14:00',
    end: '2019-04-03T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-03T15:00',
    end: '2019-04-03T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-03T14:30',
    end: '2019-04-03T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-03T17:00',
    end: '2019-04-03T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-03T16:00',
    end: '2019-04-03T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-03T17:30',
    end: '2019-04-03T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-03T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-03T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-03T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-03T15:00',
    end: '2019-04-03T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-03T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-03T14:00',
    end: '2019-04-03T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-03T17:00',
    end: '2019-04-03T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-04T14:00',
    end: '2019-04-04T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-04T14:00',
    end: '2019-04-04T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-04T16:00',
    end: '2019-04-04T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-04T15:00',
    end: '2019-04-04T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-04T15:00',
    end: '2019-04-04T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-04T17:00',
    end: '2019-04-04T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-04T15:00',
    end: '2019-04-04T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-04T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-04T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-04T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-04T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-04T15:30',
    end: '2019-04-04T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-04T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-04T15:00',
    end: '2019-04-04T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-04T16:00',
    end: '2019-04-04T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-04T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-05T13:00',
    end: '2019-04-05T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-05T16:00',
    end: '2019-04-05T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-05T14:00',
    end: '2019-04-05T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-05T15:00',
    end: '2019-04-05T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-05T18:00',
    end: '2019-04-05T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-05T15:00',
    end: '2019-04-05T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-05T16:00',
    end: '2019-04-05T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-05T17:30',
    end: '2019-04-05T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-05T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-05T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-05T15:00',
    end: '2019-04-05T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-05T16:00',
    end: '2019-04-05T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-05T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-06T10:00',
    end: '2019-04-06T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-06T13:00',
    end: '2019-04-06T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-06T12:00',
    end: '2019-04-06T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-08T15:00',
    end: '2019-04-08T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-08T16:00',
    end: '2019-04-08T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-08T15:00',
    end: '2019-04-08T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-08T16:00',
    end: '2019-04-08T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-08T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-08T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-08T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-08T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-08T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-08T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-08T16:00',
    end: '2019-04-08T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-08T18:00',
    end: '2019-04-08T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-08T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-08T20:00',
    end: '2019-04-08T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-09T14:00',
    end: '2019-04-09T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-09T16:00',
    end: '2019-04-09T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-09T15:00',
    end: '2019-04-09T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-09T15:00',
    end: '2019-04-09T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-09T16:00',
    end: '2019-04-09T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-09T14:00',
    end: '2019-04-09T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-09T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-09T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-09T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-09T15:30',
    end: '2019-04-09T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-09T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-09T16:00',
    end: '2019-04-09T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-09T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-09T18:00',
    end: '2019-04-09T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-10T13:00',
    end: '2019-04-10T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-10T16:00',
    end: '2019-04-10T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-10T14:00',
    end: '2019-04-10T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-10T15:00',
    end: '2019-04-10T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-10T14:30',
    end: '2019-04-10T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-10T17:00',
    end: '2019-04-10T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-10T16:00',
    end: '2019-04-10T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-10T17:30',
    end: '2019-04-10T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-10T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-10T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-10T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-10T15:00',
    end: '2019-04-10T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-10T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-10T14:00',
    end: '2019-04-10T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-10T17:00',
    end: '2019-04-10T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-11T14:00',
    end: '2019-04-11T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-11T14:00',
    end: '2019-04-11T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-11T16:00',
    end: '2019-04-11T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-11T15:00',
    end: '2019-04-11T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-11T15:00',
    end: '2019-04-11T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-11T17:00',
    end: '2019-04-11T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-11T15:00',
    end: '2019-04-11T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-11T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-11T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-11T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-11T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-11T15:30',
    end: '2019-04-11T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-11T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-11T15:00',
    end: '2019-04-11T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-11T16:00',
    end: '2019-04-11T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-11T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-12T13:00',
    end: '2019-04-12T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-12T16:00',
    end: '2019-04-12T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-12T14:00',
    end: '2019-04-12T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-12T15:00',
    end: '2019-04-12T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-12T18:00',
    end: '2019-04-12T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-12T15:00',
    end: '2019-04-12T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-12T16:00',
    end: '2019-04-12T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-12T17:30',
    end: '2019-04-12T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-12T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-12T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-12T15:00',
    end: '2019-04-12T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-12T16:00',
    end: '2019-04-12T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-12T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-13T10:00',
    end: '2019-04-13T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-13T13:00',
    end: '2019-04-13T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-13T12:00',
    end: '2019-04-13T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-15T15:00',
    end: '2019-04-15T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-15T16:00',
    end: '2019-04-15T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-15T15:00',
    end: '2019-04-15T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-15T16:00',
    end: '2019-04-15T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-15T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-15T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-15T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-15T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-15T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-15T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-15T16:00',
    end: '2019-04-15T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-15T18:00',
    end: '2019-04-15T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-15T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-15T20:00',
    end: '2019-04-15T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-16T14:00',
    end: '2019-04-16T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-16T16:00',
    end: '2019-04-16T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-16T15:00',
    end: '2019-04-16T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-16T15:00',
    end: '2019-04-16T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-16T16:00',
    end: '2019-04-16T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-16T14:00',
    end: '2019-04-16T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-16T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-16T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-16T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-16T15:30',
    end: '2019-04-16T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-16T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-16T16:00',
    end: '2019-04-16T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-16T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-16T18:00',
    end: '2019-04-16T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-17T13:00',
    end: '2019-04-17T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-17T16:00',
    end: '2019-04-17T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-17T14:00',
    end: '2019-04-17T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-17T15:00',
    end: '2019-04-17T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-17T14:30',
    end: '2019-04-17T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-17T17:00',
    end: '2019-04-17T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-17T16:00',
    end: '2019-04-17T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-17T17:30',
    end: '2019-04-17T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-17T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-17T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-17T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-17T15:00',
    end: '2019-04-17T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-17T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-17T14:00',
    end: '2019-04-17T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-17T17:00',
    end: '2019-04-17T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-18T14:00',
    end: '2019-04-18T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-18T14:00',
    end: '2019-04-18T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-18T16:00',
    end: '2019-04-18T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-18T15:00',
    end: '2019-04-18T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-18T15:00',
    end: '2019-04-18T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-18T17:00',
    end: '2019-04-18T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-18T15:00',
    end: '2019-04-18T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-18T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-18T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-18T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-18T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-18T15:30',
    end: '2019-04-18T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-18T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-18T15:00',
    end: '2019-04-18T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-18T16:00',
    end: '2019-04-18T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-18T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-19T13:00',
    end: '2019-04-19T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-19T16:00',
    end: '2019-04-19T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-19T14:00',
    end: '2019-04-19T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-19T15:00',
    end: '2019-04-19T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-19T18:00',
    end: '2019-04-19T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-19T15:00',
    end: '2019-04-19T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-19T16:00',
    end: '2019-04-19T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-19T17:30',
    end: '2019-04-19T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-19T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-19T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-19T15:00',
    end: '2019-04-19T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-19T16:00',
    end: '2019-04-19T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-19T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-20T10:00',
    end: '2019-04-20T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-20T13:00',
    end: '2019-04-20T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-20T12:00',
    end: '2019-04-20T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-22T15:00',
    end: '2019-04-22T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-22T16:00',
    end: '2019-04-22T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-22T15:00',
    end: '2019-04-22T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-22T16:00',
    end: '2019-04-22T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-22T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-22T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-22T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-22T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-22T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-22T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-22T16:00',
    end: '2019-04-22T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-22T18:00',
    end: '2019-04-22T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-22T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-22T20:00',
    end: '2019-04-22T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-23T14:00',
    end: '2019-04-23T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-23T16:00',
    end: '2019-04-23T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-23T15:00',
    end: '2019-04-23T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-23T15:00',
    end: '2019-04-23T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-23T16:00',
    end: '2019-04-23T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-23T14:00',
    end: '2019-04-23T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-23T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-23T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-23T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-23T15:30',
    end: '2019-04-23T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-23T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-23T16:00',
    end: '2019-04-23T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-23T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-23T18:00',
    end: '2019-04-23T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-24T13:00',
    end: '2019-04-24T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-24T16:00',
    end: '2019-04-24T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-24T14:00',
    end: '2019-04-24T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-24T15:00',
    end: '2019-04-24T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-24T14:30',
    end: '2019-04-24T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-24T17:00',
    end: '2019-04-24T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-24T16:00',
    end: '2019-04-24T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-24T17:30',
    end: '2019-04-24T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-24T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-24T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-24T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-24T15:00',
    end: '2019-04-24T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-24T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-24T14:00',
    end: '2019-04-24T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-24T17:00',
    end: '2019-04-24T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-25T14:00',
    end: '2019-04-25T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-25T14:00',
    end: '2019-04-25T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-25T16:00',
    end: '2019-04-25T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-25T15:00',
    end: '2019-04-25T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-25T15:00',
    end: '2019-04-25T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-25T17:00',
    end: '2019-04-25T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-25T15:00',
    end: '2019-04-25T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-25T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-25T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-25T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-25T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-25T15:30',
    end: '2019-04-25T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-25T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-25T15:00',
    end: '2019-04-25T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-25T16:00',
    end: '2019-04-25T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-25T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-26T13:00',
    end: '2019-04-26T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-26T16:00',
    end: '2019-04-26T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-26T14:00',
    end: '2019-04-26T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-26T15:00',
    end: '2019-04-26T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-26T18:00',
    end: '2019-04-26T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-26T15:00',
    end: '2019-04-26T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-26T16:00',
    end: '2019-04-26T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-26T17:30',
    end: '2019-04-26T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-26T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-26T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-26T15:00',
    end: '2019-04-26T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-26T16:00',
    end: '2019-04-26T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-26T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-27T10:00',
    end: '2019-04-27T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-27T13:00',
    end: '2019-04-27T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-27T12:00',
    end: '2019-04-27T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-29T15:00',
    end: '2019-04-29T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-29T16:00',
    end: '2019-04-29T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-29T15:00',
    end: '2019-04-29T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-29T16:00',
    end: '2019-04-29T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-29T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-04-29T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-29T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-29T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-29T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-29T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-29T16:00',
    end: '2019-04-29T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-29T18:00',
    end: '2019-04-29T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-29T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-29T20:00',
    end: '2019-04-29T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-30T14:00',
    end: '2019-04-30T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-04-30T16:00',
    end: '2019-04-30T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-04-30T15:00',
    end: '2019-04-30T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-04-30T15:00',
    end: '2019-04-30T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-04-30T16:00',
    end: '2019-04-30T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-30T14:00',
    end: '2019-04-30T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-30T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-04-30T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-04-30T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-30T15:30',
    end: '2019-04-30T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-04-30T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-04-30T16:00',
    end: '2019-04-30T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-30T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-04-30T18:00',
    end: '2019-04-30T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-01T13:00',
    end: '2019-05-01T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-01T16:00',
    end: '2019-05-01T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-01T14:00',
    end: '2019-05-01T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-01T15:00',
    end: '2019-05-01T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-01T14:30',
    end: '2019-05-01T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-01T17:00',
    end: '2019-05-01T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-01T16:00',
    end: '2019-05-01T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-01T17:30',
    end: '2019-05-01T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-01T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-01T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-01T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-01T15:00',
    end: '2019-05-01T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-01T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-01T14:00',
    end: '2019-05-01T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-01T17:00',
    end: '2019-05-01T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-02T14:00',
    end: '2019-05-02T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-02T14:00',
    end: '2019-05-02T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-02T16:00',
    end: '2019-05-02T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-02T15:00',
    end: '2019-05-02T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-02T15:00',
    end: '2019-05-02T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-02T17:00',
    end: '2019-05-02T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-02T15:00',
    end: '2019-05-02T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-02T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-02T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-02T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-02T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-02T15:30',
    end: '2019-05-02T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-02T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-02T15:00',
    end: '2019-05-02T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-02T16:00',
    end: '2019-05-02T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-02T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-03T13:00',
    end: '2019-05-03T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-03T16:00',
    end: '2019-05-03T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-03T14:00',
    end: '2019-05-03T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-03T15:00',
    end: '2019-05-03T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-03T18:00',
    end: '2019-05-03T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-03T15:00',
    end: '2019-05-03T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-03T16:00',
    end: '2019-05-03T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-03T17:30',
    end: '2019-05-03T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-03T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-03T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-03T15:00',
    end: '2019-05-03T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-03T16:00',
    end: '2019-05-03T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-03T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-04T10:00',
    end: '2019-05-04T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-04T13:00',
    end: '2019-05-04T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-04T12:00',
    end: '2019-05-04T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-06T15:00',
    end: '2019-05-06T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-06T16:00',
    end: '2019-05-06T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-06T15:00',
    end: '2019-05-06T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-06T16:00',
    end: '2019-05-06T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-06T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-06T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-06T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-06T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-06T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-06T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-06T16:00',
    end: '2019-05-06T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-06T18:00',
    end: '2019-05-06T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-06T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-06T20:00',
    end: '2019-05-06T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-07T14:00',
    end: '2019-05-07T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-07T16:00',
    end: '2019-05-07T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-07T15:00',
    end: '2019-05-07T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-07T15:00',
    end: '2019-05-07T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-07T16:00',
    end: '2019-05-07T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-07T14:00',
    end: '2019-05-07T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-07T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-07T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-07T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-07T15:30',
    end: '2019-05-07T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-07T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-07T16:00',
    end: '2019-05-07T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-07T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-07T18:00',
    end: '2019-05-07T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-08T13:00',
    end: '2019-05-08T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-08T16:00',
    end: '2019-05-08T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-08T14:00',
    end: '2019-05-08T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-08T15:00',
    end: '2019-05-08T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-08T14:30',
    end: '2019-05-08T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-08T17:00',
    end: '2019-05-08T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-08T16:00',
    end: '2019-05-08T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-08T17:30',
    end: '2019-05-08T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-08T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-08T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-08T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-08T15:00',
    end: '2019-05-08T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-08T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-08T14:00',
    end: '2019-05-08T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-08T17:00',
    end: '2019-05-08T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-09T14:00',
    end: '2019-05-09T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-09T14:00',
    end: '2019-05-09T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-09T16:00',
    end: '2019-05-09T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-09T15:00',
    end: '2019-05-09T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-09T15:00',
    end: '2019-05-09T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-09T17:00',
    end: '2019-05-09T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-09T15:00',
    end: '2019-05-09T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-09T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-09T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-09T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-09T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-09T15:30',
    end: '2019-05-09T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-09T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-09T15:00',
    end: '2019-05-09T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-09T16:00',
    end: '2019-05-09T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-09T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-10T13:00',
    end: '2019-05-10T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-10T16:00',
    end: '2019-05-10T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-10T14:00',
    end: '2019-05-10T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-10T15:00',
    end: '2019-05-10T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-10T18:00',
    end: '2019-05-10T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-10T15:00',
    end: '2019-05-10T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-10T16:00',
    end: '2019-05-10T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-10T17:30',
    end: '2019-05-10T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-10T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-10T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-10T15:00',
    end: '2019-05-10T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-10T16:00',
    end: '2019-05-10T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-10T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-11T10:00',
    end: '2019-05-11T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-11T13:00',
    end: '2019-05-11T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-11T12:00',
    end: '2019-05-11T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-13T15:00',
    end: '2019-05-13T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-13T16:00',
    end: '2019-05-13T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-13T15:00',
    end: '2019-05-13T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-13T16:00',
    end: '2019-05-13T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-13T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-13T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-13T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-13T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-13T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-13T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-13T16:00',
    end: '2019-05-13T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-13T18:00',
    end: '2019-05-13T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-13T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-13T20:00',
    end: '2019-05-13T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-14T14:00',
    end: '2019-05-14T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-14T16:00',
    end: '2019-05-14T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-14T15:00',
    end: '2019-05-14T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-14T15:00',
    end: '2019-05-14T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-14T16:00',
    end: '2019-05-14T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-14T14:00',
    end: '2019-05-14T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-14T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-14T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-14T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-14T15:30',
    end: '2019-05-14T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-14T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-14T16:00',
    end: '2019-05-14T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-14T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-14T18:00',
    end: '2019-05-14T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-15T13:00',
    end: '2019-05-15T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-15T16:00',
    end: '2019-05-15T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-15T14:00',
    end: '2019-05-15T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-15T15:00',
    end: '2019-05-15T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-15T14:30',
    end: '2019-05-15T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-15T17:00',
    end: '2019-05-15T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-15T16:00',
    end: '2019-05-15T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-15T17:30',
    end: '2019-05-15T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-15T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-15T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-15T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-15T15:00',
    end: '2019-05-15T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-15T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-15T14:00',
    end: '2019-05-15T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-15T17:00',
    end: '2019-05-15T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-16T14:00',
    end: '2019-05-16T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-16T14:00',
    end: '2019-05-16T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-16T16:00',
    end: '2019-05-16T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-16T15:00',
    end: '2019-05-16T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-16T15:00',
    end: '2019-05-16T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-16T17:00',
    end: '2019-05-16T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-16T15:00',
    end: '2019-05-16T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-16T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-16T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-16T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-16T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-16T15:30',
    end: '2019-05-16T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-16T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-16T15:00',
    end: '2019-05-16T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-16T16:00',
    end: '2019-05-16T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-16T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-17T13:00',
    end: '2019-05-17T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-17T16:00',
    end: '2019-05-17T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-17T14:00',
    end: '2019-05-17T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-17T15:00',
    end: '2019-05-17T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-17T18:00',
    end: '2019-05-17T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-17T15:00',
    end: '2019-05-17T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-17T16:00',
    end: '2019-05-17T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-17T17:30',
    end: '2019-05-17T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-17T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-17T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-17T15:00',
    end: '2019-05-17T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-17T16:00',
    end: '2019-05-17T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-17T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-18T10:00',
    end: '2019-05-18T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-18T13:00',
    end: '2019-05-18T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-18T12:00',
    end: '2019-05-18T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-20T15:00',
    end: '2019-05-20T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-20T16:00',
    end: '2019-05-20T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-20T15:00',
    end: '2019-05-20T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-20T16:00',
    end: '2019-05-20T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-20T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-20T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-20T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-20T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-20T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-20T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-20T16:00',
    end: '2019-05-20T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-20T18:00',
    end: '2019-05-20T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-20T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-20T20:00',
    end: '2019-05-20T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-21T14:00',
    end: '2019-05-21T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-21T16:00',
    end: '2019-05-21T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-21T15:00',
    end: '2019-05-21T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-21T15:00',
    end: '2019-05-21T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-21T16:00',
    end: '2019-05-21T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-21T14:00',
    end: '2019-05-21T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-21T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-21T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-21T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-21T15:30',
    end: '2019-05-21T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-21T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-21T16:00',
    end: '2019-05-21T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-21T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-21T18:00',
    end: '2019-05-21T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-22T13:00',
    end: '2019-05-22T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-22T16:00',
    end: '2019-05-22T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-22T14:00',
    end: '2019-05-22T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-22T15:00',
    end: '2019-05-22T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-22T14:30',
    end: '2019-05-22T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-22T17:00',
    end: '2019-05-22T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-22T16:00',
    end: '2019-05-22T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-22T17:30',
    end: '2019-05-22T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-22T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-22T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-22T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-22T15:00',
    end: '2019-05-22T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-22T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-22T14:00',
    end: '2019-05-22T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-22T17:00',
    end: '2019-05-22T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-23T14:00',
    end: '2019-05-23T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-23T14:00',
    end: '2019-05-23T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-23T16:00',
    end: '2019-05-23T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-23T15:00',
    end: '2019-05-23T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-23T15:00',
    end: '2019-05-23T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-23T17:00',
    end: '2019-05-23T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-23T15:00',
    end: '2019-05-23T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-23T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-23T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-23T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-23T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-23T15:30',
    end: '2019-05-23T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-23T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-23T15:00',
    end: '2019-05-23T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-23T16:00',
    end: '2019-05-23T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-23T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-24T13:00',
    end: '2019-05-24T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-24T16:00',
    end: '2019-05-24T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-24T14:00',
    end: '2019-05-24T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-24T15:00',
    end: '2019-05-24T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-24T18:00',
    end: '2019-05-24T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-24T15:00',
    end: '2019-05-24T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-24T16:00',
    end: '2019-05-24T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-24T17:30',
    end: '2019-05-24T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-24T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-24T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-24T15:00',
    end: '2019-05-24T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-24T16:00',
    end: '2019-05-24T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-24T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-25T10:00',
    end: '2019-05-25T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-25T13:00',
    end: '2019-05-25T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-25T12:00',
    end: '2019-05-25T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-27T15:00',
    end: '2019-05-27T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-27T16:00',
    end: '2019-05-27T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-27T15:00',
    end: '2019-05-27T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-27T16:00',
    end: '2019-05-27T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-27T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-27T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-27T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-27T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-27T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-27T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-27T16:00',
    end: '2019-05-27T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-27T18:00',
    end: '2019-05-27T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-27T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-27T20:00',
    end: '2019-05-27T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-28T14:00',
    end: '2019-05-28T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-28T16:00',
    end: '2019-05-28T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-28T15:00',
    end: '2019-05-28T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-28T15:00',
    end: '2019-05-28T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-28T16:00',
    end: '2019-05-28T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-28T14:00',
    end: '2019-05-28T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-28T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-28T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-28T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-28T15:30',
    end: '2019-05-28T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-28T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-28T16:00',
    end: '2019-05-28T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-28T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-28T18:00',
    end: '2019-05-28T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-29T13:00',
    end: '2019-05-29T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-29T16:00',
    end: '2019-05-29T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-29T14:00',
    end: '2019-05-29T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-29T15:00',
    end: '2019-05-29T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-29T14:30',
    end: '2019-05-29T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-29T17:00',
    end: '2019-05-29T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-29T16:00',
    end: '2019-05-29T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-29T17:30',
    end: '2019-05-29T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-29T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-29T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-29T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-29T15:00',
    end: '2019-05-29T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-29T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-29T14:00',
    end: '2019-05-29T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-29T17:00',
    end: '2019-05-29T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-30T14:00',
    end: '2019-05-30T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-30T14:00',
    end: '2019-05-30T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-30T16:00',
    end: '2019-05-30T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-30T15:00',
    end: '2019-05-30T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-30T15:00',
    end: '2019-05-30T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-30T17:00',
    end: '2019-05-30T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-30T15:00',
    end: '2019-05-30T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-05-30T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-30T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-30T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-30T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-30T15:30',
    end: '2019-05-30T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-05-30T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-30T15:00',
    end: '2019-05-30T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-30T16:00',
    end: '2019-05-30T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-30T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-31T13:00',
    end: '2019-05-31T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-05-31T16:00',
    end: '2019-05-31T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-05-31T14:00',
    end: '2019-05-31T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-31T15:00',
    end: '2019-05-31T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-05-31T18:00',
    end: '2019-05-31T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-31T15:00',
    end: '2019-05-31T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-31T16:00',
    end: '2019-05-31T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-05-31T17:30',
    end: '2019-05-31T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-05-31T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-05-31T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-31T15:00',
    end: '2019-05-31T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-05-31T16:00',
    end: '2019-05-31T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-05-31T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-01T10:00',
    end: '2019-06-01T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-01T13:00',
    end: '2019-06-01T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-01T12:00',
    end: '2019-06-01T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-03T15:00',
    end: '2019-06-03T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-03T16:00',
    end: '2019-06-03T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-03T15:00',
    end: '2019-06-03T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-03T16:00',
    end: '2019-06-03T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-03T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-03T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-03T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-03T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-03T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-03T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-03T16:00',
    end: '2019-06-03T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-03T18:00',
    end: '2019-06-03T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-03T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-03T20:00',
    end: '2019-06-03T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-04T14:00',
    end: '2019-06-04T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-04T16:00',
    end: '2019-06-04T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-04T15:00',
    end: '2019-06-04T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-04T15:00',
    end: '2019-06-04T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-04T16:00',
    end: '2019-06-04T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-04T14:00',
    end: '2019-06-04T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-04T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-04T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-04T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-04T15:30',
    end: '2019-06-04T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-04T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-04T16:00',
    end: '2019-06-04T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-04T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-04T18:00',
    end: '2019-06-04T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-05T13:00',
    end: '2019-06-05T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-05T16:00',
    end: '2019-06-05T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-05T14:00',
    end: '2019-06-05T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-05T15:00',
    end: '2019-06-05T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-05T14:30',
    end: '2019-06-05T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-05T17:00',
    end: '2019-06-05T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-05T16:00',
    end: '2019-06-05T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-05T17:30',
    end: '2019-06-05T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-05T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-05T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-05T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-05T15:00',
    end: '2019-06-05T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-05T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-05T14:00',
    end: '2019-06-05T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-05T17:00',
    end: '2019-06-05T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-06T14:00',
    end: '2019-06-06T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-06T14:00',
    end: '2019-06-06T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-06T16:00',
    end: '2019-06-06T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-06T15:00',
    end: '2019-06-06T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-06T15:00',
    end: '2019-06-06T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-06T17:00',
    end: '2019-06-06T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-06T15:00',
    end: '2019-06-06T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-06T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-06T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-06T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-06T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-06T15:30',
    end: '2019-06-06T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-06T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-06T15:00',
    end: '2019-06-06T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-06T16:00',
    end: '2019-06-06T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-06T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-07T13:00',
    end: '2019-06-07T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-07T16:00',
    end: '2019-06-07T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-07T14:00',
    end: '2019-06-07T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-07T15:00',
    end: '2019-06-07T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-07T18:00',
    end: '2019-06-07T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-07T15:00',
    end: '2019-06-07T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-07T16:00',
    end: '2019-06-07T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-07T17:30',
    end: '2019-06-07T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-07T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-07T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-07T15:00',
    end: '2019-06-07T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-07T16:00',
    end: '2019-06-07T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-07T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-08T10:00',
    end: '2019-06-08T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-08T13:00',
    end: '2019-06-08T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-08T12:00',
    end: '2019-06-08T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-10T15:00',
    end: '2019-06-10T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-10T16:00',
    end: '2019-06-10T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-10T15:00',
    end: '2019-06-10T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-10T16:00',
    end: '2019-06-10T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-10T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-10T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-10T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-10T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-10T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-10T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-10T16:00',
    end: '2019-06-10T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-10T18:00',
    end: '2019-06-10T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-10T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-10T20:00',
    end: '2019-06-10T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-11T14:00',
    end: '2019-06-11T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-11T16:00',
    end: '2019-06-11T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-11T15:00',
    end: '2019-06-11T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-11T15:00',
    end: '2019-06-11T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-11T16:00',
    end: '2019-06-11T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-11T14:00',
    end: '2019-06-11T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-11T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-11T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-11T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-11T15:30',
    end: '2019-06-11T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-11T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-11T16:00',
    end: '2019-06-11T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-11T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-11T18:00',
    end: '2019-06-11T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-12T13:00',
    end: '2019-06-12T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-12T16:00',
    end: '2019-06-12T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-12T14:00',
    end: '2019-06-12T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-12T15:00',
    end: '2019-06-12T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-12T14:30',
    end: '2019-06-12T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-12T17:00',
    end: '2019-06-12T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-12T16:00',
    end: '2019-06-12T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-12T17:30',
    end: '2019-06-12T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-12T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-12T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-12T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-12T15:00',
    end: '2019-06-12T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-12T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-12T14:00',
    end: '2019-06-12T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-12T17:00',
    end: '2019-06-12T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-13T14:00',
    end: '2019-06-13T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-13T14:00',
    end: '2019-06-13T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-13T16:00',
    end: '2019-06-13T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-13T15:00',
    end: '2019-06-13T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-13T15:00',
    end: '2019-06-13T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-13T17:00',
    end: '2019-06-13T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-13T15:00',
    end: '2019-06-13T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-13T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-13T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-13T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-13T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-13T15:30',
    end: '2019-06-13T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-13T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-13T15:00',
    end: '2019-06-13T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-13T16:00',
    end: '2019-06-13T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-13T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-14T13:00',
    end: '2019-06-14T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-14T16:00',
    end: '2019-06-14T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-14T14:00',
    end: '2019-06-14T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-14T15:00',
    end: '2019-06-14T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-14T18:00',
    end: '2019-06-14T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-14T15:00',
    end: '2019-06-14T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-14T16:00',
    end: '2019-06-14T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-14T17:30',
    end: '2019-06-14T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-14T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-14T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-14T15:00',
    end: '2019-06-14T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-14T16:00',
    end: '2019-06-14T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-14T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-15T10:00',
    end: '2019-06-15T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-15T13:00',
    end: '2019-06-15T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-15T12:00',
    end: '2019-06-15T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-17T15:00',
    end: '2019-06-17T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-17T16:00',
    end: '2019-06-17T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-17T15:00',
    end: '2019-06-17T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-17T16:00',
    end: '2019-06-17T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-17T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-17T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-17T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-17T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-17T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-17T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-17T16:00',
    end: '2019-06-17T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-17T18:00',
    end: '2019-06-17T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-17T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-17T20:00',
    end: '2019-06-17T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-18T14:00',
    end: '2019-06-18T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-18T16:00',
    end: '2019-06-18T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-18T15:00',
    end: '2019-06-18T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-18T15:00',
    end: '2019-06-18T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-18T16:00',
    end: '2019-06-18T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-18T14:00',
    end: '2019-06-18T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-18T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-18T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-18T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-18T15:30',
    end: '2019-06-18T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-18T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-18T16:00',
    end: '2019-06-18T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-18T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-18T18:00',
    end: '2019-06-18T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-19T13:00',
    end: '2019-06-19T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-19T16:00',
    end: '2019-06-19T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-19T14:00',
    end: '2019-06-19T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-19T15:00',
    end: '2019-06-19T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-19T14:30',
    end: '2019-06-19T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-19T17:00',
    end: '2019-06-19T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-19T16:00',
    end: '2019-06-19T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-19T17:30',
    end: '2019-06-19T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-19T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-19T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-19T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-19T15:00',
    end: '2019-06-19T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-19T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-19T14:00',
    end: '2019-06-19T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-19T17:00',
    end: '2019-06-19T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-20T14:00',
    end: '2019-06-20T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-20T14:00',
    end: '2019-06-20T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-20T16:00',
    end: '2019-06-20T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-20T15:00',
    end: '2019-06-20T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-20T15:00',
    end: '2019-06-20T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-20T17:00',
    end: '2019-06-20T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-20T15:00',
    end: '2019-06-20T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-20T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-20T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-20T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-20T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-20T15:30',
    end: '2019-06-20T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-20T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-20T15:00',
    end: '2019-06-20T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-20T16:00',
    end: '2019-06-20T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-20T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-21T13:00',
    end: '2019-06-21T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-21T16:00',
    end: '2019-06-21T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-21T14:00',
    end: '2019-06-21T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-21T15:00',
    end: '2019-06-21T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-21T18:00',
    end: '2019-06-21T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-21T15:00',
    end: '2019-06-21T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-21T16:00',
    end: '2019-06-21T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-21T17:30',
    end: '2019-06-21T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-21T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-21T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-21T15:00',
    end: '2019-06-21T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-21T16:00',
    end: '2019-06-21T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-21T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-22T10:00',
    end: '2019-06-22T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-22T13:00',
    end: '2019-06-22T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-22T12:00',
    end: '2019-06-22T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-24T15:00',
    end: '2019-06-24T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-24T16:00',
    end: '2019-06-24T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-24T15:00',
    end: '2019-06-24T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-24T16:00',
    end: '2019-06-24T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-24T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-24T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-24T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-24T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-24T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-24T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-24T16:00',
    end: '2019-06-24T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-24T18:00',
    end: '2019-06-24T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-24T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-24T20:00',
    end: '2019-06-24T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-25T14:00',
    end: '2019-06-25T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-25T16:00',
    end: '2019-06-25T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-25T15:00',
    end: '2019-06-25T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-25T15:00',
    end: '2019-06-25T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-25T16:00',
    end: '2019-06-25T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-25T14:00',
    end: '2019-06-25T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-25T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-25T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-25T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-25T15:30',
    end: '2019-06-25T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-25T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-25T16:00',
    end: '2019-06-25T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-25T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-25T18:00',
    end: '2019-06-25T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-26T13:00',
    end: '2019-06-26T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-26T16:00',
    end: '2019-06-26T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-26T14:00',
    end: '2019-06-26T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-26T15:00',
    end: '2019-06-26T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-26T14:30',
    end: '2019-06-26T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-26T17:00',
    end: '2019-06-26T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-26T16:00',
    end: '2019-06-26T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-26T17:30',
    end: '2019-06-26T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-26T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-26T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-26T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-26T15:00',
    end: '2019-06-26T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-26T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-26T14:00',
    end: '2019-06-26T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-26T17:00',
    end: '2019-06-26T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-27T14:00',
    end: '2019-06-27T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-27T14:00',
    end: '2019-06-27T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-27T16:00',
    end: '2019-06-27T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-27T15:00',
    end: '2019-06-27T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-27T15:00',
    end: '2019-06-27T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-27T17:00',
    end: '2019-06-27T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-27T15:00',
    end: '2019-06-27T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-06-27T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-27T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-27T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-27T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-27T15:30',
    end: '2019-06-27T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-06-27T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-27T15:00',
    end: '2019-06-27T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-27T16:00',
    end: '2019-06-27T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-27T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-28T13:00',
    end: '2019-06-28T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-28T16:00',
    end: '2019-06-28T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-28T14:00',
    end: '2019-06-28T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-28T15:00',
    end: '2019-06-28T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-06-28T18:00',
    end: '2019-06-28T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-28T15:00',
    end: '2019-06-28T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-28T16:00',
    end: '2019-06-28T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-06-28T17:30',
    end: '2019-06-28T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-06-28T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-06-28T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-28T15:00',
    end: '2019-06-28T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-28T16:00',
    end: '2019-06-28T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-06-28T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-06-29T10:00',
    end: '2019-06-29T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-06-29T13:00',
    end: '2019-06-29T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-06-29T12:00',
    end: '2019-06-29T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-01T15:00',
    end: '2019-07-01T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-01T16:00',
    end: '2019-07-01T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-01T15:00',
    end: '2019-07-01T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-01T16:00',
    end: '2019-07-01T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-01T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-01T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-01T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-01T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-01T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-01T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-01T16:00',
    end: '2019-07-01T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-01T18:00',
    end: '2019-07-01T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-01T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-01T20:00',
    end: '2019-07-01T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-02T14:00',
    end: '2019-07-02T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-02T16:00',
    end: '2019-07-02T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-02T15:00',
    end: '2019-07-02T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-02T15:00',
    end: '2019-07-02T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-02T16:00',
    end: '2019-07-02T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-02T14:00',
    end: '2019-07-02T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-02T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-02T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-02T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-02T15:30',
    end: '2019-07-02T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-02T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-02T16:00',
    end: '2019-07-02T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-02T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-02T18:00',
    end: '2019-07-02T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-03T13:00',
    end: '2019-07-03T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-03T16:00',
    end: '2019-07-03T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-03T14:00',
    end: '2019-07-03T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-03T15:00',
    end: '2019-07-03T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-03T14:30',
    end: '2019-07-03T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-03T17:00',
    end: '2019-07-03T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-03T16:00',
    end: '2019-07-03T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-03T17:30',
    end: '2019-07-03T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-03T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-03T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-03T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-03T15:00',
    end: '2019-07-03T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-03T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-03T14:00',
    end: '2019-07-03T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-03T17:00',
    end: '2019-07-03T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-04T14:00',
    end: '2019-07-04T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-04T14:00',
    end: '2019-07-04T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-04T16:00',
    end: '2019-07-04T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-04T15:00',
    end: '2019-07-04T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-04T15:00',
    end: '2019-07-04T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-04T17:00',
    end: '2019-07-04T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-04T15:00',
    end: '2019-07-04T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-04T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-04T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-04T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-04T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-04T15:30',
    end: '2019-07-04T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-04T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-04T15:00',
    end: '2019-07-04T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-04T16:00',
    end: '2019-07-04T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-04T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-05T13:00',
    end: '2019-07-05T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-05T16:00',
    end: '2019-07-05T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-05T14:00',
    end: '2019-07-05T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-05T15:00',
    end: '2019-07-05T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-05T18:00',
    end: '2019-07-05T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-05T15:00',
    end: '2019-07-05T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-05T16:00',
    end: '2019-07-05T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-05T17:30',
    end: '2019-07-05T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-05T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-05T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-05T15:00',
    end: '2019-07-05T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-05T16:00',
    end: '2019-07-05T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-05T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-06T10:00',
    end: '2019-07-06T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-06T13:00',
    end: '2019-07-06T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-06T12:00',
    end: '2019-07-06T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-08T15:00',
    end: '2019-07-08T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-08T16:00',
    end: '2019-07-08T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-08T15:00',
    end: '2019-07-08T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-08T16:00',
    end: '2019-07-08T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-08T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-08T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-08T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-08T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-08T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-08T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-08T16:00',
    end: '2019-07-08T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-08T18:00',
    end: '2019-07-08T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-08T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-08T20:00',
    end: '2019-07-08T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-09T14:00',
    end: '2019-07-09T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-09T16:00',
    end: '2019-07-09T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-09T15:00',
    end: '2019-07-09T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-09T15:00',
    end: '2019-07-09T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-09T16:00',
    end: '2019-07-09T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-09T14:00',
    end: '2019-07-09T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-09T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-09T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-09T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-09T15:30',
    end: '2019-07-09T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-09T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-09T16:00',
    end: '2019-07-09T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-09T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-09T18:00',
    end: '2019-07-09T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-10T13:00',
    end: '2019-07-10T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-10T16:00',
    end: '2019-07-10T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-10T14:00',
    end: '2019-07-10T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-10T15:00',
    end: '2019-07-10T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-10T14:30',
    end: '2019-07-10T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-10T17:00',
    end: '2019-07-10T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-10T16:00',
    end: '2019-07-10T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-10T17:30',
    end: '2019-07-10T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-10T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-10T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-10T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-10T15:00',
    end: '2019-07-10T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-10T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-10T14:00',
    end: '2019-07-10T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-10T17:00',
    end: '2019-07-10T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-11T14:00',
    end: '2019-07-11T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-11T14:00',
    end: '2019-07-11T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-11T16:00',
    end: '2019-07-11T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-11T15:00',
    end: '2019-07-11T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-11T15:00',
    end: '2019-07-11T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-11T17:00',
    end: '2019-07-11T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-11T15:00',
    end: '2019-07-11T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-11T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-11T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-11T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-11T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-11T15:30',
    end: '2019-07-11T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-11T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-11T15:00',
    end: '2019-07-11T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-11T16:00',
    end: '2019-07-11T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-11T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-12T13:00',
    end: '2019-07-12T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-12T16:00',
    end: '2019-07-12T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-12T14:00',
    end: '2019-07-12T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-12T15:00',
    end: '2019-07-12T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-12T18:00',
    end: '2019-07-12T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-12T15:00',
    end: '2019-07-12T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-12T16:00',
    end: '2019-07-12T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-12T17:30',
    end: '2019-07-12T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-12T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-12T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-12T15:00',
    end: '2019-07-12T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-12T16:00',
    end: '2019-07-12T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-12T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-13T10:00',
    end: '2019-07-13T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-13T13:00',
    end: '2019-07-13T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-13T12:00',
    end: '2019-07-13T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-15T15:00',
    end: '2019-07-15T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-15T16:00',
    end: '2019-07-15T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-15T15:00',
    end: '2019-07-15T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-15T16:00',
    end: '2019-07-15T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-15T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-15T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-15T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-15T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-15T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-15T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-15T16:00',
    end: '2019-07-15T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-15T18:00',
    end: '2019-07-15T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-15T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-15T20:00',
    end: '2019-07-15T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-16T14:00',
    end: '2019-07-16T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-16T16:00',
    end: '2019-07-16T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-16T15:00',
    end: '2019-07-16T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-16T15:00',
    end: '2019-07-16T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-16T16:00',
    end: '2019-07-16T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-16T14:00',
    end: '2019-07-16T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-16T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-16T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-16T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-16T15:30',
    end: '2019-07-16T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-16T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-16T16:00',
    end: '2019-07-16T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-16T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-16T18:00',
    end: '2019-07-16T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-17T13:00',
    end: '2019-07-17T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-17T16:00',
    end: '2019-07-17T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-17T14:00',
    end: '2019-07-17T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-17T15:00',
    end: '2019-07-17T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-17T14:30',
    end: '2019-07-17T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-17T17:00',
    end: '2019-07-17T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-17T16:00',
    end: '2019-07-17T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-17T17:30',
    end: '2019-07-17T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-17T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-17T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-17T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-17T15:00',
    end: '2019-07-17T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-17T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-17T14:00',
    end: '2019-07-17T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-17T17:00',
    end: '2019-07-17T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-18T14:00',
    end: '2019-07-18T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-18T14:00',
    end: '2019-07-18T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-18T16:00',
    end: '2019-07-18T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-18T15:00',
    end: '2019-07-18T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-18T15:00',
    end: '2019-07-18T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-18T17:00',
    end: '2019-07-18T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-18T15:00',
    end: '2019-07-18T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-18T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-18T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-18T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-18T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-18T15:30',
    end: '2019-07-18T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-18T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-18T15:00',
    end: '2019-07-18T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-18T16:00',
    end: '2019-07-18T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-18T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-19T13:00',
    end: '2019-07-19T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-19T16:00',
    end: '2019-07-19T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-19T14:00',
    end: '2019-07-19T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-19T15:00',
    end: '2019-07-19T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-19T18:00',
    end: '2019-07-19T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-19T15:00',
    end: '2019-07-19T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-19T16:00',
    end: '2019-07-19T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-19T17:30',
    end: '2019-07-19T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-19T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-19T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-19T15:00',
    end: '2019-07-19T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-19T16:00',
    end: '2019-07-19T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-19T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-20T10:00',
    end: '2019-07-20T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-20T13:00',
    end: '2019-07-20T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-20T12:00',
    end: '2019-07-20T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-22T15:00',
    end: '2019-07-22T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-22T16:00',
    end: '2019-07-22T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-22T15:00',
    end: '2019-07-22T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-22T16:00',
    end: '2019-07-22T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-22T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-22T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-22T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-22T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-22T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-22T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-22T16:00',
    end: '2019-07-22T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-22T18:00',
    end: '2019-07-22T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-22T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-22T20:00',
    end: '2019-07-22T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-23T14:00',
    end: '2019-07-23T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-23T16:00',
    end: '2019-07-23T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-23T15:00',
    end: '2019-07-23T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-23T15:00',
    end: '2019-07-23T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-23T16:00',
    end: '2019-07-23T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-23T14:00',
    end: '2019-07-23T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-23T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-23T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-23T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-23T15:30',
    end: '2019-07-23T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-23T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-23T16:00',
    end: '2019-07-23T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-23T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-23T18:00',
    end: '2019-07-23T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-24T13:00',
    end: '2019-07-24T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-24T16:00',
    end: '2019-07-24T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-24T14:00',
    end: '2019-07-24T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-24T15:00',
    end: '2019-07-24T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-24T14:30',
    end: '2019-07-24T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-24T17:00',
    end: '2019-07-24T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-24T16:00',
    end: '2019-07-24T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-24T17:30',
    end: '2019-07-24T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-24T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-24T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-24T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-24T15:00',
    end: '2019-07-24T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-24T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-24T14:00',
    end: '2019-07-24T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-24T17:00',
    end: '2019-07-24T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-25T14:00',
    end: '2019-07-25T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-25T14:00',
    end: '2019-07-25T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-25T16:00',
    end: '2019-07-25T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-25T15:00',
    end: '2019-07-25T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-25T15:00',
    end: '2019-07-25T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-25T17:00',
    end: '2019-07-25T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-25T15:00',
    end: '2019-07-25T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-25T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-25T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-25T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-25T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-25T15:30',
    end: '2019-07-25T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-25T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-25T15:00',
    end: '2019-07-25T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-25T16:00',
    end: '2019-07-25T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-25T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-26T13:00',
    end: '2019-07-26T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-26T16:00',
    end: '2019-07-26T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-26T14:00',
    end: '2019-07-26T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-26T15:00',
    end: '2019-07-26T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-26T18:00',
    end: '2019-07-26T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-26T15:00',
    end: '2019-07-26T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-26T16:00',
    end: '2019-07-26T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-26T17:30',
    end: '2019-07-26T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-26T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-26T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-26T15:00',
    end: '2019-07-26T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-26T16:00',
    end: '2019-07-26T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-26T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-27T10:00',
    end: '2019-07-27T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-27T13:00',
    end: '2019-07-27T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-27T12:00',
    end: '2019-07-27T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-29T15:00',
    end: '2019-07-29T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-29T16:00',
    end: '2019-07-29T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-29T15:00',
    end: '2019-07-29T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-29T16:00',
    end: '2019-07-29T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-29T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-29T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-29T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-29T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-29T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-29T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-29T16:00',
    end: '2019-07-29T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-29T18:00',
    end: '2019-07-29T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-29T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-29T20:00',
    end: '2019-07-29T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-30T14:00',
    end: '2019-07-30T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-30T16:00',
    end: '2019-07-30T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-30T15:00',
    end: '2019-07-30T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-30T15:00',
    end: '2019-07-30T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-30T16:00',
    end: '2019-07-30T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-30T14:00',
    end: '2019-07-30T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-30T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-07-30T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-30T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-30T15:30',
    end: '2019-07-30T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-30T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-30T16:00',
    end: '2019-07-30T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-30T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-07-30T18:00',
    end: '2019-07-30T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-31T13:00',
    end: '2019-07-31T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-31T16:00',
    end: '2019-07-31T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-07-31T14:00',
    end: '2019-07-31T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-07-31T15:00',
    end: '2019-07-31T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-31T14:30',
    end: '2019-07-31T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-07-31T17:00',
    end: '2019-07-31T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-31T16:00',
    end: '2019-07-31T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-07-31T17:30',
    end: '2019-07-31T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-31T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-07-31T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-07-31T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-31T15:00',
    end: '2019-07-31T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-07-31T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-31T14:00',
    end: '2019-07-31T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-07-31T17:00',
    end: '2019-07-31T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-01T14:00',
    end: '2019-08-01T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-01T14:00',
    end: '2019-08-01T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-01T16:00',
    end: '2019-08-01T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-01T15:00',
    end: '2019-08-01T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-01T15:00',
    end: '2019-08-01T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-01T17:00',
    end: '2019-08-01T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-01T15:00',
    end: '2019-08-01T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-01T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-01T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-01T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-01T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-01T15:30',
    end: '2019-08-01T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-01T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-01T15:00',
    end: '2019-08-01T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-01T16:00',
    end: '2019-08-01T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-01T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-02T13:00',
    end: '2019-08-02T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-02T16:00',
    end: '2019-08-02T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-02T14:00',
    end: '2019-08-02T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-02T15:00',
    end: '2019-08-02T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-02T18:00',
    end: '2019-08-02T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-02T15:00',
    end: '2019-08-02T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-02T16:00',
    end: '2019-08-02T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-02T17:30',
    end: '2019-08-02T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-02T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-02T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-02T15:00',
    end: '2019-08-02T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-02T16:00',
    end: '2019-08-02T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-02T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-03T10:00',
    end: '2019-08-03T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-03T13:00',
    end: '2019-08-03T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-03T12:00',
    end: '2019-08-03T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-05T15:00',
    end: '2019-08-05T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-05T16:00',
    end: '2019-08-05T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-05T15:00',
    end: '2019-08-05T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-05T16:00',
    end: '2019-08-05T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-05T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-05T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-05T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-05T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-05T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-05T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-05T16:00',
    end: '2019-08-05T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-05T18:00',
    end: '2019-08-05T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-05T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-05T20:00',
    end: '2019-08-05T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-06T14:00',
    end: '2019-08-06T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-06T16:00',
    end: '2019-08-06T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-06T15:00',
    end: '2019-08-06T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-06T15:00',
    end: '2019-08-06T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-06T16:00',
    end: '2019-08-06T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-06T14:00',
    end: '2019-08-06T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-06T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-06T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-06T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-06T15:30',
    end: '2019-08-06T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-06T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-06T16:00',
    end: '2019-08-06T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-06T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-06T18:00',
    end: '2019-08-06T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-07T13:00',
    end: '2019-08-07T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-07T16:00',
    end: '2019-08-07T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-07T14:00',
    end: '2019-08-07T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-07T15:00',
    end: '2019-08-07T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-07T14:30',
    end: '2019-08-07T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-07T17:00',
    end: '2019-08-07T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-07T16:00',
    end: '2019-08-07T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-07T17:30',
    end: '2019-08-07T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-07T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-07T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-07T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-07T15:00',
    end: '2019-08-07T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-07T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-07T14:00',
    end: '2019-08-07T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-07T17:00',
    end: '2019-08-07T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-08T14:00',
    end: '2019-08-08T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-08T14:00',
    end: '2019-08-08T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-08T16:00',
    end: '2019-08-08T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-08T15:00',
    end: '2019-08-08T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-08T15:00',
    end: '2019-08-08T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-08T17:00',
    end: '2019-08-08T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-08T15:00',
    end: '2019-08-08T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-08T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-08T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-08T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-08T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-08T15:30',
    end: '2019-08-08T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-08T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-08T15:00',
    end: '2019-08-08T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-08T16:00',
    end: '2019-08-08T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-08T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-09T13:00',
    end: '2019-08-09T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-09T16:00',
    end: '2019-08-09T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-09T14:00',
    end: '2019-08-09T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-09T15:00',
    end: '2019-08-09T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-09T18:00',
    end: '2019-08-09T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-09T15:00',
    end: '2019-08-09T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-09T16:00',
    end: '2019-08-09T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-09T17:30',
    end: '2019-08-09T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-09T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-09T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-09T15:00',
    end: '2019-08-09T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-09T16:00',
    end: '2019-08-09T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-09T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-10T10:00',
    end: '2019-08-10T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-10T13:00',
    end: '2019-08-10T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-10T12:00',
    end: '2019-08-10T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-12T15:00',
    end: '2019-08-12T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-12T16:00',
    end: '2019-08-12T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-12T15:00',
    end: '2019-08-12T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-12T16:00',
    end: '2019-08-12T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-12T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-12T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-12T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-12T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-12T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-12T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-12T16:00',
    end: '2019-08-12T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-12T18:00',
    end: '2019-08-12T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-12T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-12T20:00',
    end: '2019-08-12T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-13T14:00',
    end: '2019-08-13T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-13T16:00',
    end: '2019-08-13T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-13T15:00',
    end: '2019-08-13T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-13T15:00',
    end: '2019-08-13T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-13T16:00',
    end: '2019-08-13T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-13T14:00',
    end: '2019-08-13T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-13T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-13T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-13T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-13T15:30',
    end: '2019-08-13T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-13T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-13T16:00',
    end: '2019-08-13T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-13T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-13T18:00',
    end: '2019-08-13T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-14T13:00',
    end: '2019-08-14T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-14T16:00',
    end: '2019-08-14T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-14T14:00',
    end: '2019-08-14T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-14T15:00',
    end: '2019-08-14T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-14T14:30',
    end: '2019-08-14T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-14T17:00',
    end: '2019-08-14T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-14T16:00',
    end: '2019-08-14T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-14T17:30',
    end: '2019-08-14T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-14T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-14T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-14T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-14T15:00',
    end: '2019-08-14T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-14T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-14T14:00',
    end: '2019-08-14T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-14T17:00',
    end: '2019-08-14T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-15T14:00',
    end: '2019-08-15T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-15T14:00',
    end: '2019-08-15T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-15T16:00',
    end: '2019-08-15T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-15T15:00',
    end: '2019-08-15T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-15T15:00',
    end: '2019-08-15T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-15T17:00',
    end: '2019-08-15T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-15T15:00',
    end: '2019-08-15T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-15T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-15T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-15T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-15T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-15T15:30',
    end: '2019-08-15T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-15T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-15T15:00',
    end: '2019-08-15T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-15T16:00',
    end: '2019-08-15T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-15T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-16T13:00',
    end: '2019-08-16T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-16T16:00',
    end: '2019-08-16T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-16T14:00',
    end: '2019-08-16T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-16T15:00',
    end: '2019-08-16T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-16T18:00',
    end: '2019-08-16T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-16T15:00',
    end: '2019-08-16T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-16T16:00',
    end: '2019-08-16T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-16T17:30',
    end: '2019-08-16T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-16T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-16T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-16T15:00',
    end: '2019-08-16T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-16T16:00',
    end: '2019-08-16T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-16T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-17T10:00',
    end: '2019-08-17T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-17T13:00',
    end: '2019-08-17T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-17T12:00',
    end: '2019-08-17T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-19T15:00',
    end: '2019-08-19T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-19T16:00',
    end: '2019-08-19T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-19T15:00',
    end: '2019-08-19T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-19T16:00',
    end: '2019-08-19T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-19T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-19T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-19T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-19T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-19T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-19T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-19T16:00',
    end: '2019-08-19T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-19T18:00',
    end: '2019-08-19T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-19T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-19T20:00',
    end: '2019-08-19T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-20T14:00',
    end: '2019-08-20T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-20T16:00',
    end: '2019-08-20T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-20T15:00',
    end: '2019-08-20T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-20T15:00',
    end: '2019-08-20T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-20T16:00',
    end: '2019-08-20T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-20T14:00',
    end: '2019-08-20T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-20T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-20T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-20T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-20T15:30',
    end: '2019-08-20T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-20T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-20T16:00',
    end: '2019-08-20T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-20T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-20T18:00',
    end: '2019-08-20T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-21T13:00',
    end: '2019-08-21T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-21T16:00',
    end: '2019-08-21T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-21T14:00',
    end: '2019-08-21T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-21T15:00',
    end: '2019-08-21T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-21T14:30',
    end: '2019-08-21T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-21T17:00',
    end: '2019-08-21T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-21T16:00',
    end: '2019-08-21T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-21T17:30',
    end: '2019-08-21T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-21T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-21T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-21T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-21T15:00',
    end: '2019-08-21T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-21T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-21T14:00',
    end: '2019-08-21T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-21T17:00',
    end: '2019-08-21T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-22T14:00',
    end: '2019-08-22T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-22T14:00',
    end: '2019-08-22T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-22T16:00',
    end: '2019-08-22T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-22T15:00',
    end: '2019-08-22T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-22T15:00',
    end: '2019-08-22T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-22T17:00',
    end: '2019-08-22T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-22T15:00',
    end: '2019-08-22T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-22T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-22T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-22T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-22T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-22T15:30',
    end: '2019-08-22T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-22T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-22T15:00',
    end: '2019-08-22T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-22T16:00',
    end: '2019-08-22T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-22T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-23T13:00',
    end: '2019-08-23T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-23T16:00',
    end: '2019-08-23T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-23T14:00',
    end: '2019-08-23T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-23T15:00',
    end: '2019-08-23T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-23T18:00',
    end: '2019-08-23T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-23T15:00',
    end: '2019-08-23T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-23T16:00',
    end: '2019-08-23T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-23T17:30',
    end: '2019-08-23T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-23T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-23T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-23T15:00',
    end: '2019-08-23T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-23T16:00',
    end: '2019-08-23T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-23T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-24T10:00',
    end: '2019-08-24T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-24T13:00',
    end: '2019-08-24T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-24T12:00',
    end: '2019-08-24T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-26T15:00',
    end: '2019-08-26T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-26T16:00',
    end: '2019-08-26T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-26T15:00',
    end: '2019-08-26T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-26T16:00',
    end: '2019-08-26T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-26T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-26T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-26T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-26T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-26T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-26T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-26T16:00',
    end: '2019-08-26T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-26T18:00',
    end: '2019-08-26T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-26T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-26T20:00',
    end: '2019-08-26T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-27T14:00',
    end: '2019-08-27T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-27T16:00',
    end: '2019-08-27T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-27T15:00',
    end: '2019-08-27T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-27T15:00',
    end: '2019-08-27T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-27T16:00',
    end: '2019-08-27T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-27T14:00',
    end: '2019-08-27T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-27T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-27T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-27T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-27T15:30',
    end: '2019-08-27T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-27T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-27T16:00',
    end: '2019-08-27T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-27T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-27T18:00',
    end: '2019-08-27T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-28T13:00',
    end: '2019-08-28T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-28T16:00',
    end: '2019-08-28T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-28T14:00',
    end: '2019-08-28T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-28T15:00',
    end: '2019-08-28T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-28T14:30',
    end: '2019-08-28T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-28T17:00',
    end: '2019-08-28T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-28T16:00',
    end: '2019-08-28T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-28T17:30',
    end: '2019-08-28T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-28T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-28T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-28T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-28T15:00',
    end: '2019-08-28T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-28T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-28T14:00',
    end: '2019-08-28T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-28T17:00',
    end: '2019-08-28T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-29T14:00',
    end: '2019-08-29T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-29T14:00',
    end: '2019-08-29T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-29T16:00',
    end: '2019-08-29T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-29T15:00',
    end: '2019-08-29T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-29T15:00',
    end: '2019-08-29T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-29T17:00',
    end: '2019-08-29T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-29T15:00',
    end: '2019-08-29T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-08-29T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-29T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-29T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-29T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-29T15:30',
    end: '2019-08-29T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-08-29T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-29T15:00',
    end: '2019-08-29T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-29T16:00',
    end: '2019-08-29T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-29T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-30T13:00',
    end: '2019-08-30T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-30T16:00',
    end: '2019-08-30T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-30T14:00',
    end: '2019-08-30T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-30T15:00',
    end: '2019-08-30T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-08-30T18:00',
    end: '2019-08-30T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-30T15:00',
    end: '2019-08-30T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-30T16:00',
    end: '2019-08-30T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-08-30T17:30',
    end: '2019-08-30T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-08-30T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-08-30T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-30T15:00',
    end: '2019-08-30T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-30T16:00',
    end: '2019-08-30T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-08-30T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-08-31T10:00',
    end: '2019-08-31T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-08-31T13:00',
    end: '2019-08-31T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-08-31T12:00',
    end: '2019-08-31T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-02T15:00',
    end: '2019-09-02T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-02T16:00',
    end: '2019-09-02T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-02T15:00',
    end: '2019-09-02T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-02T16:00',
    end: '2019-09-02T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-02T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-02T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-02T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-02T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-02T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-02T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-02T16:00',
    end: '2019-09-02T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-02T18:00',
    end: '2019-09-02T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-02T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-02T20:00',
    end: '2019-09-02T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-03T14:00',
    end: '2019-09-03T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-03T16:00',
    end: '2019-09-03T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-03T15:00',
    end: '2019-09-03T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-03T15:00',
    end: '2019-09-03T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-03T16:00',
    end: '2019-09-03T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-03T14:00',
    end: '2019-09-03T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-03T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-03T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-03T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-03T15:30',
    end: '2019-09-03T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-03T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-03T16:00',
    end: '2019-09-03T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-03T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-03T18:00',
    end: '2019-09-03T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-04T13:00',
    end: '2019-09-04T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-04T16:00',
    end: '2019-09-04T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-04T14:00',
    end: '2019-09-04T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-04T15:00',
    end: '2019-09-04T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-04T14:30',
    end: '2019-09-04T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-04T17:00',
    end: '2019-09-04T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-04T16:00',
    end: '2019-09-04T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-04T17:30',
    end: '2019-09-04T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-04T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-04T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-04T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-04T15:00',
    end: '2019-09-04T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-04T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-04T14:00',
    end: '2019-09-04T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-04T17:00',
    end: '2019-09-04T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-05T14:00',
    end: '2019-09-05T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-05T14:00',
    end: '2019-09-05T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-05T16:00',
    end: '2019-09-05T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-05T15:00',
    end: '2019-09-05T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-05T15:00',
    end: '2019-09-05T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-05T17:00',
    end: '2019-09-05T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-05T15:00',
    end: '2019-09-05T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-05T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-05T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-05T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-05T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-05T15:30',
    end: '2019-09-05T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-05T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-05T15:00',
    end: '2019-09-05T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-05T16:00',
    end: '2019-09-05T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-05T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-06T13:00',
    end: '2019-09-06T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-06T16:00',
    end: '2019-09-06T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-06T14:00',
    end: '2019-09-06T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-06T15:00',
    end: '2019-09-06T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-06T18:00',
    end: '2019-09-06T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-06T15:00',
    end: '2019-09-06T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-06T16:00',
    end: '2019-09-06T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-06T17:30',
    end: '2019-09-06T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-06T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-06T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-06T15:00',
    end: '2019-09-06T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-06T16:00',
    end: '2019-09-06T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-06T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-07T10:00',
    end: '2019-09-07T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-07T13:00',
    end: '2019-09-07T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-07T12:00',
    end: '2019-09-07T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-09T15:00',
    end: '2019-09-09T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-09T16:00',
    end: '2019-09-09T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-09T15:00',
    end: '2019-09-09T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-09T16:00',
    end: '2019-09-09T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-09T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-09T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-09T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-09T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-09T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-09T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-09T16:00',
    end: '2019-09-09T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-09T18:00',
    end: '2019-09-09T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-09T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-09T20:00',
    end: '2019-09-09T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-10T14:00',
    end: '2019-09-10T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-10T16:00',
    end: '2019-09-10T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-10T15:00',
    end: '2019-09-10T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-10T15:00',
    end: '2019-09-10T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-10T16:00',
    end: '2019-09-10T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-10T14:00',
    end: '2019-09-10T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-10T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-10T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-10T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-10T15:30',
    end: '2019-09-10T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-10T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-10T16:00',
    end: '2019-09-10T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-10T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-10T18:00',
    end: '2019-09-10T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-11T13:00',
    end: '2019-09-11T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-11T16:00',
    end: '2019-09-11T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-11T14:00',
    end: '2019-09-11T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-11T15:00',
    end: '2019-09-11T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-11T14:30',
    end: '2019-09-11T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-11T17:00',
    end: '2019-09-11T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-11T16:00',
    end: '2019-09-11T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-11T17:30',
    end: '2019-09-11T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-11T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-11T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-11T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-11T15:00',
    end: '2019-09-11T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-11T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-11T14:00',
    end: '2019-09-11T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-11T17:00',
    end: '2019-09-11T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-12T14:00',
    end: '2019-09-12T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-12T14:00',
    end: '2019-09-12T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-12T16:00',
    end: '2019-09-12T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-12T15:00',
    end: '2019-09-12T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-12T15:00',
    end: '2019-09-12T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-12T17:00',
    end: '2019-09-12T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-12T15:00',
    end: '2019-09-12T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-12T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-12T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-12T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-12T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-12T15:30',
    end: '2019-09-12T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-12T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-12T15:00',
    end: '2019-09-12T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-12T16:00',
    end: '2019-09-12T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-12T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-13T13:00',
    end: '2019-09-13T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-13T16:00',
    end: '2019-09-13T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-13T14:00',
    end: '2019-09-13T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-13T15:00',
    end: '2019-09-13T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-13T18:00',
    end: '2019-09-13T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-13T15:00',
    end: '2019-09-13T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-13T16:00',
    end: '2019-09-13T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-13T17:30',
    end: '2019-09-13T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-13T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-13T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-13T15:00',
    end: '2019-09-13T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-13T16:00',
    end: '2019-09-13T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-13T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-14T10:00',
    end: '2019-09-14T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-14T13:00',
    end: '2019-09-14T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-14T12:00',
    end: '2019-09-14T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-16T15:00',
    end: '2019-09-16T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-16T16:00',
    end: '2019-09-16T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-16T15:00',
    end: '2019-09-16T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-16T16:00',
    end: '2019-09-16T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-16T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-16T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-16T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-16T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-16T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-16T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-16T16:00',
    end: '2019-09-16T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-16T18:00',
    end: '2019-09-16T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-16T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-16T20:00',
    end: '2019-09-16T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-17T14:00',
    end: '2019-09-17T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-17T16:00',
    end: '2019-09-17T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-17T15:00',
    end: '2019-09-17T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-17T15:00',
    end: '2019-09-17T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-17T16:00',
    end: '2019-09-17T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-17T14:00',
    end: '2019-09-17T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-17T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-17T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-17T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-17T15:30',
    end: '2019-09-17T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-17T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-17T16:00',
    end: '2019-09-17T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-17T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-17T18:00',
    end: '2019-09-17T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-18T13:00',
    end: '2019-09-18T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-18T16:00',
    end: '2019-09-18T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-18T14:00',
    end: '2019-09-18T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-18T15:00',
    end: '2019-09-18T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-18T14:30',
    end: '2019-09-18T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-18T17:00',
    end: '2019-09-18T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-18T16:00',
    end: '2019-09-18T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-18T17:30',
    end: '2019-09-18T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-18T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-18T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-18T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-18T15:00',
    end: '2019-09-18T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-18T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-18T14:00',
    end: '2019-09-18T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-18T17:00',
    end: '2019-09-18T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-19T14:00',
    end: '2019-09-19T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-19T14:00',
    end: '2019-09-19T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-19T16:00',
    end: '2019-09-19T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-19T15:00',
    end: '2019-09-19T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-19T15:00',
    end: '2019-09-19T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-19T17:00',
    end: '2019-09-19T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-19T15:00',
    end: '2019-09-19T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-19T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-19T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-19T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-19T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-19T15:30',
    end: '2019-09-19T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-19T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-19T15:00',
    end: '2019-09-19T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-19T16:00',
    end: '2019-09-19T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-19T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-20T13:00',
    end: '2019-09-20T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-20T16:00',
    end: '2019-09-20T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-20T14:00',
    end: '2019-09-20T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-20T15:00',
    end: '2019-09-20T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-20T18:00',
    end: '2019-09-20T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-20T15:00',
    end: '2019-09-20T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-20T16:00',
    end: '2019-09-20T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-20T17:30',
    end: '2019-09-20T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-20T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-20T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-20T15:00',
    end: '2019-09-20T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-20T16:00',
    end: '2019-09-20T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-20T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-21T10:00',
    end: '2019-09-21T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-21T13:00',
    end: '2019-09-21T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-21T12:00',
    end: '2019-09-21T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-23T15:00',
    end: '2019-09-23T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-23T16:00',
    end: '2019-09-23T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-23T15:00',
    end: '2019-09-23T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-23T16:00',
    end: '2019-09-23T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-23T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-23T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-23T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-23T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-23T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-23T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-23T16:00',
    end: '2019-09-23T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-23T18:00',
    end: '2019-09-23T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-23T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-23T20:00',
    end: '2019-09-23T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-24T14:00',
    end: '2019-09-24T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-24T16:00',
    end: '2019-09-24T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-24T15:00',
    end: '2019-09-24T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-24T15:00',
    end: '2019-09-24T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-24T16:00',
    end: '2019-09-24T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-24T14:00',
    end: '2019-09-24T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-24T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-24T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-24T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-24T15:30',
    end: '2019-09-24T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-24T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-24T16:00',
    end: '2019-09-24T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-24T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-24T18:00',
    end: '2019-09-24T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-25T13:00',
    end: '2019-09-25T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-25T16:00',
    end: '2019-09-25T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-25T14:00',
    end: '2019-09-25T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-25T15:00',
    end: '2019-09-25T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-25T14:30',
    end: '2019-09-25T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-25T17:00',
    end: '2019-09-25T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-25T16:00',
    end: '2019-09-25T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-25T17:30',
    end: '2019-09-25T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-25T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-25T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-25T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-25T15:00',
    end: '2019-09-25T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-25T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-25T14:00',
    end: '2019-09-25T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-25T17:00',
    end: '2019-09-25T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-26T14:00',
    end: '2019-09-26T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-26T14:00',
    end: '2019-09-26T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-26T16:00',
    end: '2019-09-26T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-26T15:00',
    end: '2019-09-26T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-26T15:00',
    end: '2019-09-26T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-26T17:00',
    end: '2019-09-26T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-26T15:00',
    end: '2019-09-26T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-26T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-26T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-26T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-26T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-26T15:30',
    end: '2019-09-26T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-26T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-26T15:00',
    end: '2019-09-26T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-26T16:00',
    end: '2019-09-26T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-26T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-27T13:00',
    end: '2019-09-27T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-27T16:00',
    end: '2019-09-27T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-27T14:00',
    end: '2019-09-27T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-27T15:00',
    end: '2019-09-27T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-27T18:00',
    end: '2019-09-27T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-27T15:00',
    end: '2019-09-27T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-27T16:00',
    end: '2019-09-27T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-27T17:30',
    end: '2019-09-27T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-27T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-27T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-27T15:00',
    end: '2019-09-27T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-27T16:00',
    end: '2019-09-27T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-27T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-09-28T10:00',
    end: '2019-09-28T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-28T13:00',
    end: '2019-09-28T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-28T12:00',
    end: '2019-09-28T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-09-30T15:00',
    end: '2019-09-30T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-09-30T16:00',
    end: '2019-09-30T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-30T15:00',
    end: '2019-09-30T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-09-30T16:00',
    end: '2019-09-30T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-30T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-09-30T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-30T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-09-30T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-09-30T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-09-30T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-30T16:00',
    end: '2019-09-30T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-09-30T18:00',
    end: '2019-09-30T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-30T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-09-30T20:00',
    end: '2019-09-30T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-01T14:00',
    end: '2019-10-01T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-01T16:00',
    end: '2019-10-01T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-01T15:00',
    end: '2019-10-01T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-01T15:00',
    end: '2019-10-01T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-01T16:00',
    end: '2019-10-01T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-01T14:00',
    end: '2019-10-01T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-01T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-01T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-01T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-01T15:30',
    end: '2019-10-01T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-01T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-01T16:00',
    end: '2019-10-01T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-01T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-01T18:00',
    end: '2019-10-01T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-02T13:00',
    end: '2019-10-02T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-02T16:00',
    end: '2019-10-02T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-02T14:00',
    end: '2019-10-02T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-02T15:00',
    end: '2019-10-02T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-02T14:30',
    end: '2019-10-02T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-02T17:00',
    end: '2019-10-02T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-02T16:00',
    end: '2019-10-02T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-02T17:30',
    end: '2019-10-02T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-02T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-02T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-02T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-02T15:00',
    end: '2019-10-02T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-02T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-02T14:00',
    end: '2019-10-02T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-02T17:00',
    end: '2019-10-02T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-03T14:00',
    end: '2019-10-03T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-03T14:00',
    end: '2019-10-03T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-03T16:00',
    end: '2019-10-03T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-03T15:00',
    end: '2019-10-03T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-03T15:00',
    end: '2019-10-03T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-03T17:00',
    end: '2019-10-03T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-03T15:00',
    end: '2019-10-03T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-03T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-03T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-03T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-03T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-03T15:30',
    end: '2019-10-03T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-03T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-03T15:00',
    end: '2019-10-03T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-03T16:00',
    end: '2019-10-03T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-03T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-04T13:00',
    end: '2019-10-04T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-04T16:00',
    end: '2019-10-04T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-04T14:00',
    end: '2019-10-04T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-04T15:00',
    end: '2019-10-04T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-04T18:00',
    end: '2019-10-04T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-04T15:00',
    end: '2019-10-04T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-04T16:00',
    end: '2019-10-04T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-04T17:30',
    end: '2019-10-04T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-04T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-04T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-04T15:00',
    end: '2019-10-04T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-04T16:00',
    end: '2019-10-04T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-04T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-05T10:00',
    end: '2019-10-05T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-05T13:00',
    end: '2019-10-05T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-05T12:00',
    end: '2019-10-05T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-07T15:00',
    end: '2019-10-07T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-07T16:00',
    end: '2019-10-07T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-07T15:00',
    end: '2019-10-07T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-07T16:00',
    end: '2019-10-07T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-07T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-07T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-07T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-07T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-07T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-07T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-07T16:00',
    end: '2019-10-07T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-07T18:00',
    end: '2019-10-07T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-07T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-07T20:00',
    end: '2019-10-07T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-08T14:00',
    end: '2019-10-08T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-08T16:00',
    end: '2019-10-08T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-08T15:00',
    end: '2019-10-08T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-08T15:00',
    end: '2019-10-08T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-08T16:00',
    end: '2019-10-08T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-08T14:00',
    end: '2019-10-08T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-08T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-08T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-08T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-08T15:30',
    end: '2019-10-08T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-08T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-08T16:00',
    end: '2019-10-08T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-08T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-08T18:00',
    end: '2019-10-08T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-09T13:00',
    end: '2019-10-09T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-09T16:00',
    end: '2019-10-09T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-09T14:00',
    end: '2019-10-09T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-09T15:00',
    end: '2019-10-09T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-09T14:30',
    end: '2019-10-09T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-09T17:00',
    end: '2019-10-09T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-09T16:00',
    end: '2019-10-09T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-09T17:30',
    end: '2019-10-09T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-09T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-09T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-09T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-09T15:00',
    end: '2019-10-09T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-09T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-09T14:00',
    end: '2019-10-09T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-09T17:00',
    end: '2019-10-09T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-10T14:00',
    end: '2019-10-10T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-10T14:00',
    end: '2019-10-10T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-10T16:00',
    end: '2019-10-10T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-10T15:00',
    end: '2019-10-10T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-10T15:00',
    end: '2019-10-10T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-10T17:00',
    end: '2019-10-10T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-10T15:00',
    end: '2019-10-10T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-10T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-10T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-10T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-10T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-10T15:30',
    end: '2019-10-10T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-10T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-10T15:00',
    end: '2019-10-10T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-10T16:00',
    end: '2019-10-10T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-10T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-11T13:00',
    end: '2019-10-11T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-11T16:00',
    end: '2019-10-11T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-11T14:00',
    end: '2019-10-11T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-11T15:00',
    end: '2019-10-11T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-11T18:00',
    end: '2019-10-11T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-11T15:00',
    end: '2019-10-11T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-11T16:00',
    end: '2019-10-11T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-11T17:30',
    end: '2019-10-11T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-11T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-11T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-11T15:00',
    end: '2019-10-11T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-11T16:00',
    end: '2019-10-11T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-11T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-12T10:00',
    end: '2019-10-12T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-12T13:00',
    end: '2019-10-12T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-12T12:00',
    end: '2019-10-12T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-14T15:00',
    end: '2019-10-14T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-14T16:00',
    end: '2019-10-14T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-14T15:00',
    end: '2019-10-14T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-14T16:00',
    end: '2019-10-14T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-14T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-14T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-14T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-14T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-14T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-14T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-14T16:00',
    end: '2019-10-14T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-14T18:00',
    end: '2019-10-14T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-14T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-14T20:00',
    end: '2019-10-14T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-15T14:00',
    end: '2019-10-15T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-15T16:00',
    end: '2019-10-15T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-15T15:00',
    end: '2019-10-15T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-15T15:00',
    end: '2019-10-15T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-15T16:00',
    end: '2019-10-15T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-15T14:00',
    end: '2019-10-15T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-15T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-15T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-15T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-15T15:30',
    end: '2019-10-15T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-15T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-15T16:00',
    end: '2019-10-15T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-15T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-15T18:00',
    end: '2019-10-15T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-16T13:00',
    end: '2019-10-16T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-16T16:00',
    end: '2019-10-16T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-16T14:00',
    end: '2019-10-16T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-16T15:00',
    end: '2019-10-16T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-16T14:30',
    end: '2019-10-16T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-16T17:00',
    end: '2019-10-16T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-16T16:00',
    end: '2019-10-16T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-16T17:30',
    end: '2019-10-16T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-16T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-16T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-16T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-16T15:00',
    end: '2019-10-16T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-16T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-16T14:00',
    end: '2019-10-16T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-16T17:00',
    end: '2019-10-16T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-17T14:00',
    end: '2019-10-17T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-17T14:00',
    end: '2019-10-17T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-17T16:00',
    end: '2019-10-17T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-17T15:00',
    end: '2019-10-17T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-17T15:00',
    end: '2019-10-17T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-17T17:00',
    end: '2019-10-17T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-17T15:00',
    end: '2019-10-17T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-17T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-17T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-17T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-17T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-17T15:30',
    end: '2019-10-17T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-17T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-17T15:00',
    end: '2019-10-17T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-17T16:00',
    end: '2019-10-17T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-17T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-18T13:00',
    end: '2019-10-18T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-18T16:00',
    end: '2019-10-18T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-18T14:00',
    end: '2019-10-18T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-18T15:00',
    end: '2019-10-18T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-18T18:00',
    end: '2019-10-18T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-18T15:00',
    end: '2019-10-18T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-18T16:00',
    end: '2019-10-18T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-18T17:30',
    end: '2019-10-18T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-18T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-18T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-18T15:00',
    end: '2019-10-18T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-18T16:00',
    end: '2019-10-18T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-18T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-19T10:00',
    end: '2019-10-19T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-19T13:00',
    end: '2019-10-19T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-19T12:00',
    end: '2019-10-19T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-21T15:00',
    end: '2019-10-21T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-21T16:00',
    end: '2019-10-21T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-21T15:00',
    end: '2019-10-21T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-21T16:00',
    end: '2019-10-21T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-21T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-21T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-21T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-21T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-21T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-21T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-21T16:00',
    end: '2019-10-21T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-21T18:00',
    end: '2019-10-21T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-21T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-21T20:00',
    end: '2019-10-21T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-22T14:00',
    end: '2019-10-22T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-22T16:00',
    end: '2019-10-22T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-22T15:00',
    end: '2019-10-22T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-22T15:00',
    end: '2019-10-22T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-22T16:00',
    end: '2019-10-22T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-22T14:00',
    end: '2019-10-22T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-22T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-22T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-22T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-22T15:30',
    end: '2019-10-22T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-22T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-22T16:00',
    end: '2019-10-22T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-22T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-22T18:00',
    end: '2019-10-22T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-23T13:00',
    end: '2019-10-23T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-23T16:00',
    end: '2019-10-23T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-23T14:00',
    end: '2019-10-23T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-23T15:00',
    end: '2019-10-23T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-23T14:30',
    end: '2019-10-23T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-23T17:00',
    end: '2019-10-23T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-23T16:00',
    end: '2019-10-23T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-23T17:30',
    end: '2019-10-23T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-23T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-23T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-23T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-23T15:00',
    end: '2019-10-23T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-23T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-23T14:00',
    end: '2019-10-23T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-23T17:00',
    end: '2019-10-23T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-24T14:00',
    end: '2019-10-24T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-24T14:00',
    end: '2019-10-24T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-24T16:00',
    end: '2019-10-24T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-24T15:00',
    end: '2019-10-24T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-24T15:00',
    end: '2019-10-24T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-24T17:00',
    end: '2019-10-24T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-24T15:00',
    end: '2019-10-24T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-24T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-24T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-24T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-24T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-24T15:30',
    end: '2019-10-24T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-24T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-24T15:00',
    end: '2019-10-24T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-24T16:00',
    end: '2019-10-24T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-24T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-25T13:00',
    end: '2019-10-25T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-25T16:00',
    end: '2019-10-25T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-25T14:00',
    end: '2019-10-25T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-25T15:00',
    end: '2019-10-25T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-25T18:00',
    end: '2019-10-25T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-25T15:00',
    end: '2019-10-25T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-25T16:00',
    end: '2019-10-25T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-25T17:30',
    end: '2019-10-25T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-25T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-25T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-25T15:00',
    end: '2019-10-25T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-25T16:00',
    end: '2019-10-25T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-25T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-26T10:00',
    end: '2019-10-26T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-26T13:00',
    end: '2019-10-26T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-26T12:00',
    end: '2019-10-26T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-28T15:00',
    end: '2019-10-28T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-28T16:00',
    end: '2019-10-28T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-28T15:00',
    end: '2019-10-28T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-28T16:00',
    end: '2019-10-28T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-28T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-28T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-28T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-28T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-28T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-28T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-28T16:00',
    end: '2019-10-28T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-28T18:00',
    end: '2019-10-28T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-28T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-28T20:00',
    end: '2019-10-28T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-29T14:00',
    end: '2019-10-29T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-29T16:00',
    end: '2019-10-29T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-29T15:00',
    end: '2019-10-29T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-29T15:00',
    end: '2019-10-29T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-29T16:00',
    end: '2019-10-29T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-29T14:00',
    end: '2019-10-29T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-29T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-29T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-29T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-29T15:30',
    end: '2019-10-29T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-29T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-29T16:00',
    end: '2019-10-29T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-29T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-29T18:00',
    end: '2019-10-29T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-30T13:00',
    end: '2019-10-30T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-30T16:00',
    end: '2019-10-30T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-30T14:00',
    end: '2019-10-30T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-30T15:00',
    end: '2019-10-30T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-30T14:30',
    end: '2019-10-30T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-30T17:00',
    end: '2019-10-30T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-30T16:00',
    end: '2019-10-30T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-30T17:30',
    end: '2019-10-30T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-30T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-30T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-30T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-30T15:00',
    end: '2019-10-30T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-30T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-30T14:00',
    end: '2019-10-30T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-30T17:00',
    end: '2019-10-30T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-31T14:00',
    end: '2019-10-31T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-31T14:00',
    end: '2019-10-31T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-10-31T16:00',
    end: '2019-10-31T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-10-31T15:00',
    end: '2019-10-31T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-31T15:00',
    end: '2019-10-31T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-10-31T17:00',
    end: '2019-10-31T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-10-31T15:00',
    end: '2019-10-31T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-10-31T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-31T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-10-31T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-10-31T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-31T15:30',
    end: '2019-10-31T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-10-31T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-31T15:00',
    end: '2019-10-31T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-10-31T16:00',
    end: '2019-10-31T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-10-31T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-01T13:00',
    end: '2019-11-01T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-01T16:00',
    end: '2019-11-01T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-01T14:00',
    end: '2019-11-01T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-01T15:00',
    end: '2019-11-01T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-01T18:00',
    end: '2019-11-01T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-01T15:00',
    end: '2019-11-01T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-01T16:00',
    end: '2019-11-01T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-01T17:30',
    end: '2019-11-01T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-01T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-01T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-01T15:00',
    end: '2019-11-01T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-01T16:00',
    end: '2019-11-01T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-01T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-02T10:00',
    end: '2019-11-02T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-02T13:00',
    end: '2019-11-02T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-02T12:00',
    end: '2019-11-02T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-04T15:00',
    end: '2019-11-04T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-04T16:00',
    end: '2019-11-04T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-04T15:00',
    end: '2019-11-04T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-04T16:00',
    end: '2019-11-04T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-04T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-04T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-04T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-04T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-04T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-04T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-04T16:00',
    end: '2019-11-04T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-04T18:00',
    end: '2019-11-04T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-04T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-04T20:00',
    end: '2019-11-04T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-05T14:00',
    end: '2019-11-05T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-05T16:00',
    end: '2019-11-05T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-05T15:00',
    end: '2019-11-05T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-05T15:00',
    end: '2019-11-05T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-05T16:00',
    end: '2019-11-05T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-05T14:00',
    end: '2019-11-05T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-05T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-05T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-05T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-05T15:30',
    end: '2019-11-05T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-05T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-05T16:00',
    end: '2019-11-05T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-05T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-05T18:00',
    end: '2019-11-05T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-06T13:00',
    end: '2019-11-06T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-06T16:00',
    end: '2019-11-06T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-06T14:00',
    end: '2019-11-06T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-06T15:00',
    end: '2019-11-06T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-06T14:30',
    end: '2019-11-06T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-06T17:00',
    end: '2019-11-06T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-06T16:00',
    end: '2019-11-06T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-06T17:30',
    end: '2019-11-06T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-06T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-06T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-06T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-06T15:00',
    end: '2019-11-06T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-06T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-06T14:00',
    end: '2019-11-06T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-06T17:00',
    end: '2019-11-06T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-07T14:00',
    end: '2019-11-07T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-07T14:00',
    end: '2019-11-07T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-07T16:00',
    end: '2019-11-07T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-07T15:00',
    end: '2019-11-07T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-07T15:00',
    end: '2019-11-07T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-07T17:00',
    end: '2019-11-07T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-07T15:00',
    end: '2019-11-07T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-07T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-07T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-07T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-07T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-07T15:30',
    end: '2019-11-07T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-07T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-07T15:00',
    end: '2019-11-07T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-07T16:00',
    end: '2019-11-07T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-07T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-08T13:00',
    end: '2019-11-08T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-08T16:00',
    end: '2019-11-08T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-08T14:00',
    end: '2019-11-08T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-08T15:00',
    end: '2019-11-08T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-08T18:00',
    end: '2019-11-08T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-08T15:00',
    end: '2019-11-08T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-08T16:00',
    end: '2019-11-08T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-08T17:30',
    end: '2019-11-08T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-08T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-08T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-08T15:00',
    end: '2019-11-08T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-08T16:00',
    end: '2019-11-08T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-08T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-09T10:00',
    end: '2019-11-09T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-09T13:00',
    end: '2019-11-09T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-09T12:00',
    end: '2019-11-09T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-11T15:00',
    end: '2019-11-11T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-11T16:00',
    end: '2019-11-11T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-11T15:00',
    end: '2019-11-11T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-11T16:00',
    end: '2019-11-11T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-11T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-11T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-11T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-11T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-11T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-11T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-11T16:00',
    end: '2019-11-11T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-11T18:00',
    end: '2019-11-11T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-11T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-11T20:00',
    end: '2019-11-11T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-12T14:00',
    end: '2019-11-12T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-12T16:00',
    end: '2019-11-12T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-12T15:00',
    end: '2019-11-12T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-12T15:00',
    end: '2019-11-12T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-12T16:00',
    end: '2019-11-12T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-12T14:00',
    end: '2019-11-12T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-12T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-12T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-12T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-12T15:30',
    end: '2019-11-12T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-12T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-12T16:00',
    end: '2019-11-12T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-12T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-12T18:00',
    end: '2019-11-12T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-13T13:00',
    end: '2019-11-13T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-13T16:00',
    end: '2019-11-13T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-13T14:00',
    end: '2019-11-13T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-13T15:00',
    end: '2019-11-13T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-13T14:30',
    end: '2019-11-13T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-13T17:00',
    end: '2019-11-13T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-13T16:00',
    end: '2019-11-13T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-13T17:30',
    end: '2019-11-13T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-13T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-13T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-13T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-13T15:00',
    end: '2019-11-13T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-13T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-13T14:00',
    end: '2019-11-13T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-13T17:00',
    end: '2019-11-13T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-14T14:00',
    end: '2019-11-14T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-14T14:00',
    end: '2019-11-14T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-14T16:00',
    end: '2019-11-14T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-14T15:00',
    end: '2019-11-14T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-14T15:00',
    end: '2019-11-14T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-14T17:00',
    end: '2019-11-14T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-14T15:00',
    end: '2019-11-14T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-14T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-14T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-14T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-14T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-14T15:30',
    end: '2019-11-14T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-14T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-14T15:00',
    end: '2019-11-14T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-14T16:00',
    end: '2019-11-14T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-14T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-15T13:00',
    end: '2019-11-15T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-15T16:00',
    end: '2019-11-15T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-15T14:00',
    end: '2019-11-15T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-15T15:00',
    end: '2019-11-15T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-15T18:00',
    end: '2019-11-15T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-15T15:00',
    end: '2019-11-15T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-15T16:00',
    end: '2019-11-15T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-15T17:30',
    end: '2019-11-15T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-15T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-15T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-15T15:00',
    end: '2019-11-15T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-15T16:00',
    end: '2019-11-15T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-15T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-16T10:00',
    end: '2019-11-16T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-16T13:00',
    end: '2019-11-16T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-16T12:00',
    end: '2019-11-16T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-18T15:00',
    end: '2019-11-18T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-18T16:00',
    end: '2019-11-18T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-18T15:00',
    end: '2019-11-18T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-18T16:00',
    end: '2019-11-18T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-18T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-18T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-18T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-18T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-18T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-18T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-18T16:00',
    end: '2019-11-18T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-18T18:00',
    end: '2019-11-18T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-18T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-18T20:00',
    end: '2019-11-18T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-19T14:00',
    end: '2019-11-19T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-19T16:00',
    end: '2019-11-19T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-19T15:00',
    end: '2019-11-19T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-19T15:00',
    end: '2019-11-19T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-19T16:00',
    end: '2019-11-19T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-19T14:00',
    end: '2019-11-19T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-19T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-19T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-19T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-19T15:30',
    end: '2019-11-19T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-19T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-19T16:00',
    end: '2019-11-19T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-19T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-19T18:00',
    end: '2019-11-19T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-20T13:00',
    end: '2019-11-20T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-20T16:00',
    end: '2019-11-20T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-20T14:00',
    end: '2019-11-20T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-20T15:00',
    end: '2019-11-20T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-20T14:30',
    end: '2019-11-20T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-20T17:00',
    end: '2019-11-20T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-20T16:00',
    end: '2019-11-20T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-20T17:30',
    end: '2019-11-20T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-20T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-20T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-20T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-20T15:00',
    end: '2019-11-20T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-20T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-20T14:00',
    end: '2019-11-20T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-20T17:00',
    end: '2019-11-20T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-21T14:00',
    end: '2019-11-21T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-21T14:00',
    end: '2019-11-21T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-21T16:00',
    end: '2019-11-21T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-21T15:00',
    end: '2019-11-21T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-21T15:00',
    end: '2019-11-21T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-21T17:00',
    end: '2019-11-21T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-21T15:00',
    end: '2019-11-21T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-21T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-21T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-21T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-21T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-21T15:30',
    end: '2019-11-21T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-21T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-21T15:00',
    end: '2019-11-21T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-21T16:00',
    end: '2019-11-21T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-21T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-22T13:00',
    end: '2019-11-22T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-22T16:00',
    end: '2019-11-22T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-22T14:00',
    end: '2019-11-22T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-22T15:00',
    end: '2019-11-22T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-22T18:00',
    end: '2019-11-22T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-22T15:00',
    end: '2019-11-22T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-22T16:00',
    end: '2019-11-22T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-22T17:30',
    end: '2019-11-22T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-22T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-22T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-22T15:00',
    end: '2019-11-22T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-22T16:00',
    end: '2019-11-22T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-22T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-23T10:00',
    end: '2019-11-23T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-23T13:00',
    end: '2019-11-23T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-23T12:00',
    end: '2019-11-23T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-25T15:00',
    end: '2019-11-25T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-25T16:00',
    end: '2019-11-25T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-25T15:00',
    end: '2019-11-25T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-25T16:00',
    end: '2019-11-25T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-25T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-25T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-25T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-25T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-25T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-25T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-25T16:00',
    end: '2019-11-25T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-25T18:00',
    end: '2019-11-25T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-25T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-25T20:00',
    end: '2019-11-25T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-26T14:00',
    end: '2019-11-26T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-26T16:00',
    end: '2019-11-26T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-26T15:00',
    end: '2019-11-26T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-26T15:00',
    end: '2019-11-26T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-26T16:00',
    end: '2019-11-26T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-26T14:00',
    end: '2019-11-26T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-26T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-26T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-26T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-26T15:30',
    end: '2019-11-26T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-26T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-26T16:00',
    end: '2019-11-26T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-26T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-26T18:00',
    end: '2019-11-26T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-27T13:00',
    end: '2019-11-27T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-27T16:00',
    end: '2019-11-27T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-27T14:00',
    end: '2019-11-27T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-27T15:00',
    end: '2019-11-27T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-27T14:30',
    end: '2019-11-27T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-27T17:00',
    end: '2019-11-27T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-27T16:00',
    end: '2019-11-27T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-27T17:30',
    end: '2019-11-27T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-27T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-27T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-27T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-27T15:00',
    end: '2019-11-27T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-27T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-27T14:00',
    end: '2019-11-27T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-27T17:00',
    end: '2019-11-27T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-28T14:00',
    end: '2019-11-28T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-28T14:00',
    end: '2019-11-28T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-28T16:00',
    end: '2019-11-28T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-28T15:00',
    end: '2019-11-28T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-28T15:00',
    end: '2019-11-28T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-28T17:00',
    end: '2019-11-28T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-28T15:00',
    end: '2019-11-28T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-11-28T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-28T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-28T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-28T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-28T15:30',
    end: '2019-11-28T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-11-28T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-28T15:00',
    end: '2019-11-28T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-28T16:00',
    end: '2019-11-28T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-28T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-29T13:00',
    end: '2019-11-29T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-29T16:00',
    end: '2019-11-29T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-29T14:00',
    end: '2019-11-29T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-29T15:00',
    end: '2019-11-29T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-11-29T18:00',
    end: '2019-11-29T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-29T15:00',
    end: '2019-11-29T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-29T16:00',
    end: '2019-11-29T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-11-29T17:30',
    end: '2019-11-29T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-11-29T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-11-29T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-29T15:00',
    end: '2019-11-29T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-29T16:00',
    end: '2019-11-29T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-11-29T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-11-30T10:00',
    end: '2019-11-30T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-11-30T13:00',
    end: '2019-11-30T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-11-30T12:00',
    end: '2019-11-30T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-02T15:00',
    end: '2019-12-02T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-02T16:00',
    end: '2019-12-02T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-02T15:00',
    end: '2019-12-02T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-02T16:00',
    end: '2019-12-02T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-02T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-02T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-02T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-02T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-02T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-02T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-02T16:00',
    end: '2019-12-02T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-02T18:00',
    end: '2019-12-02T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-02T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-02T20:00',
    end: '2019-12-02T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-03T14:00',
    end: '2019-12-03T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-03T16:00',
    end: '2019-12-03T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-03T15:00',
    end: '2019-12-03T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-03T15:00',
    end: '2019-12-03T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-03T16:00',
    end: '2019-12-03T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-03T14:00',
    end: '2019-12-03T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-03T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-03T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-03T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-03T15:30',
    end: '2019-12-03T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-03T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-03T16:00',
    end: '2019-12-03T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-03T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-03T18:00',
    end: '2019-12-03T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-04T13:00',
    end: '2019-12-04T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-04T16:00',
    end: '2019-12-04T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-04T14:00',
    end: '2019-12-04T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-04T15:00',
    end: '2019-12-04T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-04T14:30',
    end: '2019-12-04T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-04T17:00',
    end: '2019-12-04T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-04T16:00',
    end: '2019-12-04T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-04T17:30',
    end: '2019-12-04T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-04T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-04T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-04T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-04T15:00',
    end: '2019-12-04T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-04T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-04T14:00',
    end: '2019-12-04T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-04T17:00',
    end: '2019-12-04T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-05T14:00',
    end: '2019-12-05T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-05T14:00',
    end: '2019-12-05T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-05T16:00',
    end: '2019-12-05T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-05T15:00',
    end: '2019-12-05T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-05T15:00',
    end: '2019-12-05T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-05T17:00',
    end: '2019-12-05T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-05T15:00',
    end: '2019-12-05T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-05T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-05T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-05T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-05T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-05T15:30',
    end: '2019-12-05T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-05T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-05T15:00',
    end: '2019-12-05T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-05T16:00',
    end: '2019-12-05T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-05T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-06T13:00',
    end: '2019-12-06T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-06T16:00',
    end: '2019-12-06T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-06T14:00',
    end: '2019-12-06T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-06T15:00',
    end: '2019-12-06T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-06T18:00',
    end: '2019-12-06T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-06T15:00',
    end: '2019-12-06T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-06T16:00',
    end: '2019-12-06T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-06T17:30',
    end: '2019-12-06T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-06T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-06T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-06T15:00',
    end: '2019-12-06T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-06T16:00',
    end: '2019-12-06T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-06T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-07T10:00',
    end: '2019-12-07T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-07T13:00',
    end: '2019-12-07T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-07T12:00',
    end: '2019-12-07T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-09T15:00',
    end: '2019-12-09T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-09T16:00',
    end: '2019-12-09T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-09T15:00',
    end: '2019-12-09T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-09T16:00',
    end: '2019-12-09T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-09T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-09T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-09T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-09T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-09T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-09T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-09T16:00',
    end: '2019-12-09T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-09T18:00',
    end: '2019-12-09T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-09T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-09T20:00',
    end: '2019-12-09T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-10T14:00',
    end: '2019-12-10T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-10T16:00',
    end: '2019-12-10T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-10T15:00',
    end: '2019-12-10T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-10T15:00',
    end: '2019-12-10T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-10T16:00',
    end: '2019-12-10T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-10T14:00',
    end: '2019-12-10T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-10T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-10T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-10T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-10T15:30',
    end: '2019-12-10T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-10T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-10T16:00',
    end: '2019-12-10T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-10T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-10T18:00',
    end: '2019-12-10T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-11T13:00',
    end: '2019-12-11T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-11T16:00',
    end: '2019-12-11T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-11T14:00',
    end: '2019-12-11T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-11T15:00',
    end: '2019-12-11T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-11T14:30',
    end: '2019-12-11T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-11T17:00',
    end: '2019-12-11T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-11T16:00',
    end: '2019-12-11T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-11T17:30',
    end: '2019-12-11T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-11T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-11T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-11T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-11T15:00',
    end: '2019-12-11T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-11T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-11T14:00',
    end: '2019-12-11T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-11T17:00',
    end: '2019-12-11T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-12T14:00',
    end: '2019-12-12T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-12T14:00',
    end: '2019-12-12T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-12T16:00',
    end: '2019-12-12T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-12T15:00',
    end: '2019-12-12T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-12T15:00',
    end: '2019-12-12T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-12T17:00',
    end: '2019-12-12T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-12T15:00',
    end: '2019-12-12T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-12T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-12T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-12T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-12T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-12T15:30',
    end: '2019-12-12T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-12T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-12T15:00',
    end: '2019-12-12T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-12T16:00',
    end: '2019-12-12T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-12T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-13T13:00',
    end: '2019-12-13T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-13T16:00',
    end: '2019-12-13T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-13T14:00',
    end: '2019-12-13T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-13T15:00',
    end: '2019-12-13T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-13T18:00',
    end: '2019-12-13T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-13T15:00',
    end: '2019-12-13T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-13T16:00',
    end: '2019-12-13T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-13T17:30',
    end: '2019-12-13T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-13T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-13T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-13T15:00',
    end: '2019-12-13T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-13T16:00',
    end: '2019-12-13T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-13T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-14T10:00',
    end: '2019-12-14T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-14T13:00',
    end: '2019-12-14T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-14T12:00',
    end: '2019-12-14T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-16T15:00',
    end: '2019-12-16T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-16T16:00',
    end: '2019-12-16T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-16T15:00',
    end: '2019-12-16T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-16T16:00',
    end: '2019-12-16T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-16T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-16T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-16T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-16T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-16T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-16T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-16T16:00',
    end: '2019-12-16T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-16T18:00',
    end: '2019-12-16T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-16T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-16T20:00',
    end: '2019-12-16T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-17T14:00',
    end: '2019-12-17T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-17T16:00',
    end: '2019-12-17T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-17T15:00',
    end: '2019-12-17T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-17T15:00',
    end: '2019-12-17T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-17T16:00',
    end: '2019-12-17T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-17T14:00',
    end: '2019-12-17T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-17T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-17T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-17T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-17T15:30',
    end: '2019-12-17T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-17T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-17T16:00',
    end: '2019-12-17T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-17T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-17T18:00',
    end: '2019-12-17T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-18T13:00',
    end: '2019-12-18T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-18T16:00',
    end: '2019-12-18T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-18T14:00',
    end: '2019-12-18T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-18T15:00',
    end: '2019-12-18T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-18T14:30',
    end: '2019-12-18T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-18T17:00',
    end: '2019-12-18T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-18T16:00',
    end: '2019-12-18T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-18T17:30',
    end: '2019-12-18T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-18T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-18T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-18T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-18T15:00',
    end: '2019-12-18T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-18T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-18T14:00',
    end: '2019-12-18T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-18T17:00',
    end: '2019-12-18T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-19T14:00',
    end: '2019-12-19T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-19T14:00',
    end: '2019-12-19T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-19T16:00',
    end: '2019-12-19T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-19T15:00',
    end: '2019-12-19T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-19T15:00',
    end: '2019-12-19T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-19T17:00',
    end: '2019-12-19T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-19T15:00',
    end: '2019-12-19T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-19T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-19T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-19T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-19T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-19T15:30',
    end: '2019-12-19T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-19T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-19T15:00',
    end: '2019-12-19T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-19T16:00',
    end: '2019-12-19T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-19T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-20T13:00',
    end: '2019-12-20T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-20T16:00',
    end: '2019-12-20T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-20T14:00',
    end: '2019-12-20T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-20T15:00',
    end: '2019-12-20T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-20T18:00',
    end: '2019-12-20T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-20T15:00',
    end: '2019-12-20T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-20T16:00',
    end: '2019-12-20T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-20T17:30',
    end: '2019-12-20T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-20T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-20T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-20T15:00',
    end: '2019-12-20T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-20T16:00',
    end: '2019-12-20T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-20T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-21T10:00',
    end: '2019-12-21T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-21T13:00',
    end: '2019-12-21T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-21T12:00',
    end: '2019-12-21T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-23T15:00',
    end: '2019-12-23T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-23T16:00',
    end: '2019-12-23T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-23T15:00',
    end: '2019-12-23T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-23T16:00',
    end: '2019-12-23T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-23T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-23T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-23T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-23T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-23T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-23T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-23T16:00',
    end: '2019-12-23T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-23T18:00',
    end: '2019-12-23T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-23T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-23T20:00',
    end: '2019-12-23T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-24T14:00',
    end: '2019-12-24T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-24T16:00',
    end: '2019-12-24T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-24T15:00',
    end: '2019-12-24T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-24T15:00',
    end: '2019-12-24T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-24T16:00',
    end: '2019-12-24T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-24T14:00',
    end: '2019-12-24T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-24T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-24T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-24T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-24T15:30',
    end: '2019-12-24T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-24T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-24T16:00',
    end: '2019-12-24T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-24T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-24T18:00',
    end: '2019-12-24T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-25T13:00',
    end: '2019-12-25T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-25T16:00',
    end: '2019-12-25T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-25T14:00',
    end: '2019-12-25T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-25T15:00',
    end: '2019-12-25T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-25T14:30',
    end: '2019-12-25T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-25T17:00',
    end: '2019-12-25T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-25T16:00',
    end: '2019-12-25T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-25T17:30',
    end: '2019-12-25T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-25T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-25T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-25T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-25T15:00',
    end: '2019-12-25T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-25T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-25T14:00',
    end: '2019-12-25T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-25T17:00',
    end: '2019-12-25T19:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-26T14:00',
    end: '2019-12-26T18:00'
  },{
    title: "ASP Fort Robinson | Bogenschießen auf Anfrage",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-26T14:00',
    end: '2019-12-26T16:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-26T16:00',
    end: '2019-12-26T18:00'
  },{
    title: "SPIK Jugendklub | Fitness/Jin-Jitsu",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-26T15:00',
    end: '2019-12-26T17:00'
  },{
    title: "Mikado | AG Klaver",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-26T15:00',
    end: '2019-12-26T18:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-26T17:00',
    end: '2019-12-26T19:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-26T15:00',
    end: '2019-12-26T18:00'
  },{
    title: "Kontaktladen VIP | VIP-Talk & Tonstudio (Anmeldung)",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-26T17:00'
  },{
    title: "Welseclub | Basteln & Werken",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-26T16:00'
  },{
    title: "Welseclub | Kampfkunst (Anfänger)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-26T18:00'
  },{
    title: "Trialog | Sport im Fitnessraum",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-26T16:00'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-26T15:30',
    end: '2019-12-26T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-26T17:00'
  },{
    title: "Leos Hütte | Musizieren ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-26T15:00',
    end: '2019-12-26T18:00'
  },{
    title: "Leos Hütte | Kreatives Gestalten",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-26T16:00',
    end: '2019-12-26T19:00'
  },{
    title: "Full House | Fitnesstraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-26T16:00'
  },{
    title: "ASP Fort Robinson | Gärtnern",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-27T13:00',
    end: '2019-12-27T15:00'
  },{
    title: "ASP Fort Robinson | Kochen/Grillen über Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-27T16:00',
    end: '2019-12-27T18:00'
  },{
    title: "SPIK Jugendklub | PC-Tag & Kochen ",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-27T14:00',
    end: '2019-12-27T20:00'
  },{
    title: "Mikado | AG Kochen",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-27T15:00',
    end: '2019-12-27T17:00'
  },{
    title: "Mikado | Spieleabend",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-27T18:00',
    end: '2019-12-27T20:00'
  },{
    title: "Pia Olymp | Spiel & Spaß",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-27T15:00',
    end: '2019-12-27T16:00'
  },{
    title: "Pia Olymp | Tanzen (9-12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-27T16:00',
    end: '2019-12-27T17:00'
  },{
    title: "Pia Olymp | Tanzen (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-27T17:30',
    end: '2019-12-27T19:00'
  },{
    title: "Welseclub | Let's talk about... (für Mädchen)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-27T15:00'
  },{
    title: "Trialog | Billiardturnier & Spielenachmittag",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-27T15:00'
  },{
    title: "Leos Hütte | Musizieren",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-27T15:00',
    end: '2019-12-27T17:00'
  },{
    title: "Leos Hütte | Freizeitsport ",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-27T16:00',
    end: '2019-12-27T20:00'
  },{
    title: "Full House | Kochen",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-27T15:00'
  },{
    title: "ASP Fort Robinson | offene Spielangebote",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-28T10:00',
    end: '2019-12-28T17:00'
  },{
    title: "SPIK Jugendklub | Hallensport",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-28T13:00',
    end: '2019-12-28T17:00'
  },{
    title: "Leos Hütte | Fußball (Halle Welsestr.)",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-28T12:00',
    end: '2019-12-28T15:00'
  },{
    title: "SPIK Jugendklub | Bandraum",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-30T15:00',
    end: '2019-12-30T17:00'
  },{
    title: "Mikado | AG Garten",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-30T16:00',
    end: '2019-12-30T18:00'
  },{
    title: "Pia Olymp | Skaten/BMX",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-30T15:00',
    end: '2019-12-30T18:00'
  },{
    title: "Pia Olymp | Ringen & Raufen",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-30T16:00',
    end: '2019-12-30T17:00'
  },{
    title: "Kontaktladen VIP | Kochen",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-30T16:00'
  },{
    title: "Kontaktladen VIP | HipHop & Streetdance",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2019-12-30T16:30'
  },{
    title: "Welseclub | Backen",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-30T16:00'
  },{
    title: "Welseclub | Kampfkunsttraining (Kinder)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-30T16:15'
  },{
    title: "Trialog | Kekse & Kakao",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-30T17:00'
  },{
    title: "Jump | Kochen & gemeinsam essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-30T16:00'
  },{
    title: "Leos Hütte | Küchengespräche, Basteln",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-30T16:00',
    end: '2019-12-30T20:00'
  },{
    title: "Leos Hütte | Zumba",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-30T18:00',
    end: '2019-12-30T19:30'
  },{
    title: "Full House | Kochen ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-30T15:00'
  },{
    title: "Full House | Fußballtraining",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-30T20:00',
    end: '2019-12-30T22:00'
  },{
    title: "ASP Fort Robinson | Hüttenbau",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-31T14:00',
    end: '2019-12-31T18:00'
  },{
    title: "ASP Fort Robinson | Pferde AG",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2019-12-31T16:00',
    end: '2019-12-31T18:00'
  },{
    title: "SPIK Jugendklub | Kunst & Werken",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2019-12-31T15:00',
    end: '2019-12-31T17:00'
  },{
    title: "Mikado | AG Klavier",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2019-12-31T15:00',
    end: '2019-12-31T18:00'
  },{
    title: "Pia Olymp | Ball- & Bewegungsspiele",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2019-12-31T16:00',
    end: '2019-12-31T17:00'
  },{
    title: "Welseclub | Fahrradwerkstatt",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-31T14:00',
    end: '2019-12-31T17:00'
  },{
    title: "Welseclub | Tischtennis-AG",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-31T16:00'
  },{
    title: "Welseclub | ClubAktiv (Ideensammlung)",
    url: "{{ '/Jugendklubs/Welseclub.html' | relative_url }}",
    start: '2019-12-31T17:00'
  },{
    title: "Trialog | Kreativangebot",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2019-12-31T15:30'
  },{
    title: "Jump | Sport für alle",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-31T15:30',
    end: '2019-12-31T16:30'
  },{
    title: "Jump | gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2019-12-31T17:00'
  },{
    title: "Leos Hütte | Graffiti/Comic, Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2019-12-31T16:00',
    end: '2019-12-31T18:00'
  },{
    title: "Full House | Fitnesstraining ",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-31T16:00'
  },{
    title: "Full House | Volleyball (mit Gangway)",
    url: "{{ '/Jugendklubs/Full_House.html' | relative_url }}",
    start: '2019-12-31T18:00',
    end: '2019-12-31T20:00'
  },{
    title: "ASP Fort Robinson | Betreuung Pferde",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2020-01-01T13:00',
    end: '2020-01-01T15:00'
  },{
    title: "ASP Fort Robinson | Reiten & Stockbrot",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2020-01-01T16:00',
    end: '2020-01-01T18:00'
  },{
    title: "ASP Fort Robinson | Lagerfeuer",
    url: "{{ '/Jugendklubs/ASP_Fort_Robinson.html' | relative_url }}",
    start: '2020-01-01T14:00',
    end: '2020-01-01T18:00'
  },{
    title: "SPIK Jugendklub | Graffiti",
    url: "{{ '/Jugendklubs/SPIK_JK.html' | relative_url }}",
    start: '2020-01-01T15:00',
    end: '2020-01-01T18:00'
  },{
    title: "Mikado | AG Brush",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2020-01-01T14:30',
    end: '2020-01-01T16:30'
  },{
    title: "Mikado | Kinotag",
    url: "{{ '/Jugendklubs/Mikado.html' | relative_url }}",
    start: '2020-01-01T17:00',
    end: '2020-01-01T20:00'
  },{
    title: "Pia Olymp | Fitness (ab 10 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2020-01-01T16:00',
    end: '2020-01-01T17:00'
  },{
    title: "Pia Olymp | Pubertätsstunde (ab 12 J.)",
    url: "{{ '/Jugendklubs/Pia_Olymp.html' | relative_url }}",
    start: '2020-01-01T17:30',
    end: '2020-01-01T19:00'
  },{
    title: "Kontaktladen VIP | Kreativangebot",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2020-01-01T16:00'
  },{
    title: "Kontaktladen VIP | Kicker-, Billard-, Tischtennistraining",
    url: "{{ '/Jugendklubs/Kontaktladen_VIP.html' | relative_url }}",
    start: '2020-01-01T17:00'
  },{
    title: "Trialog | junge Küche",
    url: "{{ '/Jugendklubs/Trialog.html' | relative_url }}",
    start: '2020-01-01T16:00'
  },{
    title: "Jump | gemeinsames Lernangebot",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2020-01-01T15:00',
    end: '2020-01-01T16:00'
  },{
    title: "Jump | Kochen & gemeinsam Essen",
    url: "{{ '/Jugendklubs/Jump.html' | relative_url }}",
    start: '2020-01-01T16:00'
  },{
    title: "Leos Hütte | Multimedia",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2020-01-01T14:00',
    end: '2020-01-01T18:00'
  },{
    title: "Leos Hütte | Breakdance",
    url: "{{ '/Jugendklubs/Leos_Hütte.html' | relative_url }}",
    start: '2020-01-01T17:00',
    end: '2020-01-01T19:00'
  }
      ]
    });
  });

</script>

<div id='calendar'></div>


<script type="text/javascript">
  $(document).ready(function(){
    document.getElementsByClassName('fc-scroller')[0].style.overflow = 'unset';
  });
</script>