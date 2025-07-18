<?php

namespace App\Controller\Api;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RegisterController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $email            = $data['email']            ?? null;
        $password         = $data['password']         ?? null;
        $confirmPassword  = $data['confirmPassword']  ?? null;   // <- nouveau champ
        $name             = $data['name']             ?? null;
        $lastname         = $data['lastname']         ?? null;
        $pseudo           = $data['pseudo']           ?? null;
        $avatar           = $data['avatar']           ?? null;

        /* ---------- validations ---------- */

        // champs obligatoires
        if (!$email || !$password || !$confirmPassword || !$name || !$lastname) {
            return new JsonResponse(
                ['error' => 'Tous les champs obligatoires ne sont pas remplis'],
                400
            );
        }

        // mot de passe ≠ confirmation
        if ($password !== $confirmPassword) {
            return new JsonResponse(
                ['error' => 'Les mots de passe ne correspondent pas'],
                400
            );
        }

        // email déjà utilisé
        if ($entityManager->getRepository(User::class)->findOneBy(['email' => $email])) {
            return new JsonResponse(['error' => 'Email déjà utilisé'], 400);
        }

        /* ---------- création de l’utilisateur ---------- */

        // pseudo aléatoire si absent
        if (!$pseudo) {
            // Exemple : "cardswap_8f3a6c"
            $pseudo = 'cardswap_' . substr(bin2hex(random_bytes(4)), 0, 6);
        }

        $user = (new User())
            ->setEmail($email)
            ->setName($name)
            ->setLastname($lastname)
            ->setPseudo($pseudo)
            ->setAvatar($avatar)
            ->setCreatedAt(new \DateTime())
            ->setVerified(false);

        // hachage du mot de passe
        $user->setPassword(
            $passwordHasher->hashPassword($user, $password)
        );

        $entityManager->persist($user);
        $entityManager->flush();

        return new JsonResponse(
            ['message' => 'Inscription réussie', 'pseudo' => $pseudo],
            201
        );
    }
}


