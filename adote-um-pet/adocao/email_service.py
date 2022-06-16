
from django.core.mail import send_mail

def enviar_email_confirmacao(adocao):
  assunto = "Adoção realizada com sucesso!"
  conteudo = f"Parabens por realizar a adoção do pet {adocao.pet.name} com o valor mensal de R${adocao.valor}"
  remetente = "balaonavegantes@gmail.com"
  destinatario = [adocao.email]
  
  send_mail(assunto, conteudo, remetente, destinatario)