from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def download(request):
    from pytube import YouTube

    message = request.body.decode('utf-8')
    yt = YouTube(message)
    ys = yt.streams.get_highest_resolution()
    ys.download()
    # Gönderilen mesajı JSON olarak döndür
    return Response({'detail': f"video indiriliyor"}, status=status.HTTP_201_CREATED)
