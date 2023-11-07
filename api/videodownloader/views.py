from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def download(request):
    from pytube import YouTube




    message = request.body.decode('utf-8')
    yt = YouTube(message)
    yt.title = "my title"
    ys = yt.streams.get_highest_resolution()
    ys.download()
    # Gönderilen mesajı JSON olarak döndür
    return JsonResponse({'detail': f"{yt.title}isimli video indiriliyor"}, status=200)
