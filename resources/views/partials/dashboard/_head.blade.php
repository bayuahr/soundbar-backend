

<!-- Favicon -->
<link rel="shortcut icon" href="{{asset('favicon.ico')}}" />
<link rel="stylesheet" href="{{asset('css/libs.min.css')}}">
<link rel="stylesheet" href="{{asset('css/hope-ui.css?v=1.1.1')}}">
<link rel="stylesheet" href="{{asset('css/custom.css?v=1.1.0')}}">
<link rel="stylesheet" href="{{asset('css/dark.css?v=1.1.0')}}">
<link rel="stylesheet" href="{{asset('css/rtl.css?v=1.1.0')}}">
<link rel="stylesheet" href="{{asset('css/customizer.css?v=1.1.1')}}">

<!-- Fullcalender CSS -->
<link rel="stylesheet" href="{{ asset('vendor/flatpickr/dist/flatpickr.min.css') }}">
<link rel="stylesheet" href="{{ asset('vendor/summernote/summernote-lite.min.css') }}">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css" />
<link rel='stylesheet' href="{{asset('vendor/fullcalendar/core/main.css')}}" />
<link rel='stylesheet' href="{{asset('vendor/fullcalendar/daygrid/main.css')}}" />
<link rel='stylesheet' href="{{asset('vendor/fullcalendar/timegrid/main.css')}}" />
<link rel='stylesheet' href="{{asset('vendor/fullcalendar/list/main.css')}}" />
<link rel="stylesheet" href="{{asset('vendor/Leaflet/leaflet.css')}}" />

<link rel="stylesheet" href="{{asset('vendor/aos/dist/aos.css')}}" />

<!-- Custom CSS -->
<link rel="stylesheet" href="{{asset('css/main.css')}}" />
<style>
    th.hide-search input{
       display: none;
    }
 </style>

@stack('style')
