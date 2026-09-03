import type { Stain } from '@/lib/content';

/**
 * Etiqueta de espécime: o quadrado de coloração seguido do código.
 * É o marcador que substitui os eyebrows genéricos em toda a página.
 */
export default function Tag({
  children,
  stain = 'hematox',
  className,
}: {
  children: React.ReactNode;
  stain?: Stain;
  className?: string;
}) {
  return (
    <span className={className ? `tag ${className}` : 'tag'} data-stain={stain}>
      <span className="tag-swatch" />
      {children}
    </span>
  );
}
