export interface UseCase<Request, Respponse> {
  execute(request: Request): Promise<Respponse>;
}
