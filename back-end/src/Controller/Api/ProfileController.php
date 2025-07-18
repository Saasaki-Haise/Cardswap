<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfileController extends AbstractController
{
    #[Route('/api/profile', name: 'api_profile', methods: ['GET'])]
    public function __invoke(): JsonResponse
    {
        /** @var \App\Entity\User $user */
        $user = $this->getUser();
    
        if (!$user) {
            return new JsonResponse(['error' => 'Non authentifié', 'user' => $user], 401);
            
        }

        return new JsonResponse([
            'id'       => $user->getId(),
            'email'    => $user->getEmail(),
            'name'     => $user->getName(),
            'lastname' => $user->getLastname(),
            'pseudo'   => $user->getPseudo(),
            'avatar'   => $user->getAvatar(),
            'joined'   => $user->getCreatedAt()->format('Y-m-d'),
            'verified' => $user->isVerified(),
            'bio'      => $user->getBio(),
        ]);
    }
}
