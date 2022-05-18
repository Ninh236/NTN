@component('mail::message')
# Welcome to Healthy First,

Heheh

@component('mail::button', ['url' => '', 'color' => 'success'])
Go Healthy First
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
